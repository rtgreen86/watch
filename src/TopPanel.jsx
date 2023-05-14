import './TopPanel.css'

function decorateChildren(children) {
  if (!children) {
    return <li>EMPTY</li>
  }
  if (!Array.isArray(children)) {
    return <li>{children}</li>;
  }
  return children.map(item => (<li>{item}</li>));
}

export default function TopPanel({ children }) {
  return (<header class="top-panel clearfix">
    <form><ul>{decorateChildren(children)}</ul></form>
  </header >);
}