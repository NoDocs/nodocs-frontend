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
        el.classList.add("selectedss");
      }

      for (const el of removed) {
        el.classList.remove("selected");
      }
    })
    .on("stop", ({ selected }) => {
      const nodeIds = Array.from(selected)
        .map(node => node.getAttribute('data-node-id'))

      editor.selectedNodeIds = nodeIds
    });

  return editor;
}

export default withSelectRectangle
