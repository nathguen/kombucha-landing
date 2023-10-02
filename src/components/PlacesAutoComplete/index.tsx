import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
  ComboboxPopover,
} from "@reach/combobox";
import usePlacesAutocomplete from "use-places-autocomplete";

import "@reach/combobox/styles.css";
import Script from "next/script";

export default function PlacesAutocomplete() {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
  } = usePlacesAutocomplete({ callbackName: "initGoogleApi" });

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = (val) => {
    setValue(val, false);
  };

  return (
    <>
      <Script
        defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBpYj56rFbj9ruUI3R2r6slb7k_Vj1vs6I&libraries=places&callback=initGoogleApi"
      ></Script>
      <Combobox
        onSelect={handleSelect}
        aria-labelledby="demo"
        className="flex w-full"
      >
        <ComboboxInput
          value={value}
          onChange={handleInput}
          disabled={!ready}
          className="block w-full rounded-md border-0 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inseta focus:ring-primary-600 pl-4 text-lg"
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ place_id, description }) => (
                <ComboboxOption key={place_id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </>
  );
}
