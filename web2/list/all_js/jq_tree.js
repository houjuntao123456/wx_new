var zTreeObj;
// zTree 的参数配置，深入使用请参考 API 文档（setting 配置详解）
var setting = {
    callback: {
        beforeClick: zTreeBeforeClick
    },
    view: {
        // dblClickExpand: dblClickExpand
        dblClickExpand: true
    }
};
// zTree 的数据属性，深入使用请参考 API 文档（zTreeNode 节点数据详解）
var zNodes = [
    {
        name: "test1",
        open: true,
        id: 1,
        children: [
            {
                name: "test1_1",
                open: true,
                id: 1,
                children: [{
                    name: "hgjg"
                }]
            },
            { name: "test1_2", open: true, }
        ]
    },
    {
        name: "test2",
        open: true,
        id: 1,
        children: [
            { name: "test2_1" },
            { name: "test2_2" }
        ]
    }
];
$(document).ready(function () {
    zTreeObj = $.fn.zTree.init($("#treeDemo"), setting, zNodes);
});
function zTreeBeforeClick(treeId, treeNode, clickFlag) {
    document.getElementById("wuxian").classList.add("display_none")
    if (treeNode.id === 1) {
        return false
    } else {
        document.getElementById("v_organization").innerHTML = treeNode.name;
        console.log(treeId);
        console.log(treeNode.name);
        console.log(clickFlag);
    }

}