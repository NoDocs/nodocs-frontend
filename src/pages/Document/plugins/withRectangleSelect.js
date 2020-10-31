import Selection from '@simonwep/selection-js'

const withSelectRectangle = (editor) => {
  Selection.create({
    class: "selection-area",
    selectables: ['[data-slate-node="element"]'],
    startareas: ['[data-start="selection"]']
  })
    .on("beforestart", ({ oe }) => oe.target.getAttribute("data-start") === "selection")
    .on("move", ({ changed: { added, removed } }) => {
      for (const el of added) {
        el.classList.add("selected");
      }

      for (const el of removed) {
        el.classList.remove("selected");
      }
    })
    .on("stop", ({ selected }) => {
      console.log(editor.selection)
      editor.insertText(' -> Something about us')
    });

  return editor;
}

export default withSelectRectangle
