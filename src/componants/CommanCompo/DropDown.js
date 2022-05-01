import * as React from "react";
import SearchBox from "./SearchBox";

export default function DropDown(props) {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    // setAge(event.target.value);
    props.onPage && props.onPage(Number(event));
  };

  return (
    <div class="dropdown show">
      <div
        class="btn btn-secondary dropdown-toggle"
        role="button"
        id="dropdownMenuLink"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {props.children}
      </div>

      <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
        {props.list ? (
          props.list.map((d) => {
            return (
              <div
                style={{ width: props.width, ...props.style }}
                className={`${props.className} dropdown-item`}
                // class="dropdown-item"
                onClick={(e) => {
                  handleChange(d);
                }}
              >
                {d}
              </div>
            );
          })
        ) : (
          <>
            <a className={`${props.className} dropdown-item`}>Another action</a>
            <a className={`${props.className} dropdown-item`}>
              Something else here
            </a>
          </>
        )}
      </div>
    </div>
  );
}
