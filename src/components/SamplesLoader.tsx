import { h, JSX } from 'preact';
import { AudioContext } from 'standardized-audio-context';
import { ACCEPTED_MIME_TYPES } from '../constants';
import { useSamplesContext, getSamples } from './SamplesProvider';
import { useInitSampleLoad } from '../hooks/useInitSampleLoad';

const audioContext = new AudioContext();

const SamplesLoader = () => {
  const { dispatch, setSamplesAreLoading } = useSamplesContext();

  useInitSampleLoad();

  const handleOnChange: JSX.GenericEventHandler<EventTarget> = ({ target }) => {
    const file = (target as HTMLInputElement).files[0];
    // TODO
    // for(let i = 0; i < files.length; i++) {
    //       let f = files[i];
    //       ...
    //   }
    const reader = new FileReader();
    reader.onload = async () => {
      setSamplesAreLoading(true);
      try {
        const decodedData = await audioContext.decodeAudioData(
          reader.result as ArrayBuffer
        );
        dispatch(getSamples([decodedData]));
      } catch (event) {
        console.log(
          'Sorry this browser unable to download this file... try Chrome',
          event
        );
      }
      setSamplesAreLoading(false);
    };
    reader.onerror = (event) => {
      console.error('An error ocurred reading the file: ', event);
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <form>
      <label htmlFor="upload">
        Upload
        <input
          accept={ACCEPTED_MIME_TYPES}
          id="upload"
          multiple
          onInput={handleOnChange}
          type="file"
        />
      </label>
    </form>
  );
};

export default SamplesLoader;
