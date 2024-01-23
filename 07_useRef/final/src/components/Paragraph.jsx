import { forwardRef } from "react";

export default forwardRef(function Paragraph(props, ref) {
  console.log("props.children", props.children);
  return (
    <p
      ref={ref}
      onClick={() =>
        props.handleClick(
          props.id,
          props.children.slice(0, props.children.indexOf(" "))
        )
      }
      {...props}
    >
      {props.children}
    </p>
  );
});
