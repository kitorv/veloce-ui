/* eslint-disable no-unused-vars */
export default {
  separate: false,
  render(h, content, { row }) {
    return (
      <div
        class={[
          "kv-datagrid--body-cell-tree",
          { "kv-datagrid--body-cell-tree-space": row.isLeaf },
          { "kv-datagrid--body-cell-tree-expand": row.treeNodeExpand }
        ]}
        style={{ "padding-left": `${row.level * 15}px` }}
      >
        <i
          class="kv-icon-caret-right"
          on-click={() => {
            row.treeNodeExpand = !row.treeNodeExpand;
          }}
        />
        {content}
      </div>
    );
  }
};
