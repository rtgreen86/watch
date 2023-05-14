export default function Checkbox({ checked, children }) {
  return <><input type="checkbox" checked={checked}></input><label for="hours">{children}</label></>;
}