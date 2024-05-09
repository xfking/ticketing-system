<template>
  <div class="content">
    <ContentBox title="查询结果">
      <el-table
        :data="list"
        stripe
        border
        :header-cell-style="{ background: '#f1f1f1', color: '#606266' }"
        style="width: 100%"
      >
        <el-table-column
          v-for="(item, index) in columns"
          :key="index"
          :prop="item.colKey"
          :label="item.title"
          min-width="150"
          :width="item.width"
          :fixed="item.fixed"
        >
          <template #default="scope" v-if="item.colKey === 'operation'">
            <el-button @click="handleEdit(scope.$index)"> 查看 </el-button>
            <el-button
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
            >
              编辑
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </ContentBox>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue";

const list = ref([
  {
    index: 2412312132131,
    name: "萧萧下",
    createTime: "2024/3/14",
  },
]);
const columns = [
  {
    align: "center",
    colKey: "index",
    title: "订单编号",
  },
  {
    align: "center",
    colKey: "name",
    title: "客户",
  },
  {
    align: "center",
    colKey: "name",
    title: "商品",
  },
  {
    align: "center",
    colKey: "name",
    title: "区域",
  },
  {
    align: "center",
    colKey: "name",
    title: "经销商",
  },
  {
    align: "center",
    colKey: "name",
    title: "车牌号",
  },
  {
    align: "center",
    colKey: "name",
    title: "总价",
  },
  {
    align: "center",
    colKey: "name",
    title: "状态",
  },
  {
    align: "center",
    colKey: "name",
    title: "单价",
  },
  {
    align: "center",
    colKey: "name",
    title: "数量",
  },
  {
    align: "center",
    colKey: "createTime",
    title: "下单时间",
  },
  {
    align: "center",
    colKey: "operation",
    title: "操作",
    width: 180,
    cell: "operation",
    fixed: "right",
  },
];
// const getList = () => {};

const handleDelete = ({ index }) => {
  list.value.splice(index - 1, 1);
};
onMounted(() => {
  // getList();
});
</script>

<style scoped></style>
