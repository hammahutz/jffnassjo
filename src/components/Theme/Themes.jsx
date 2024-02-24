import React from 'react'

const Themes = () => {
  return (
    <div>{        document.querySelector("#root").setAttribute("data-theme", settings.get().theme)}</div>
  )
}

export default Themes