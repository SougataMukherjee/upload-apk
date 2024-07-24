import React from "react";
export default function DropDown() {
  const [checked, setChecked] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [para, setPara] = React.useState(null);
  const changeHandler = (e) => {
    setChecked(true);
    if (e.target.files.length > 0) {
      let filename = e.target.files[0].name;
      let ext = filename.match(/\.([^\.]+)$/)[1];
      if (ext.indexOf("apk") > -1) {
        setPara(null);
      } else if (typeof filename === "undefined") {
        setPara("only upload apk");
      } else {
        setPara("only upload apk");
      }
    }
  };

  return (
    <div>
      <input
        type="radio"
        name="one"
        onClick={() => {
          setChecked(true), setChecked2(false);
        }}
      />
      File1
      <br />
      {checked ? <input type="file" /> : null}
      <br />
      <input
        type="radio"
        name="one"
        onClick={() => {
          setChecked2(true), setChecked(false);
        }}
      />
      File2
      <br />
      {checked2 ? (
        <input type="file" accept=".apk,.ipa" onChange={changeHandler} />
      ) : null}
      {checked2 ? (
        <button
          onClick={() => {
            setChecked(false);
            document.getElementById("file").value = "";
          }}
        >
          x
        </button>
      ) : null}
      {para && (
        <p id="para" style={{ color: "red" }}>
          {para}
        </p>
      )}
    </div>
  );
}
