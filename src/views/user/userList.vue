<template>
  <el-table :data="list" stripe style="width: 100%">
    <el-table-column
      v-for="(item, index) in columns"
      :key="index"
      :prop="item.colKey"
      :label="item.title"
      :width="item.width"
    >
      <template #default="scope" v-if="item.colKey === 'operation'">
        <el-button size="small" @click="handleEdit(scope.$index)">
          详情
        </el-button>
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
        >
          删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { getUserList } from "./userList";

const list = ref([
  {
    index: 0,
    name: "萧萧下",
    createTime: "2024/3/14",
  },
]);
const columns = [
  {
    align: "center",
    width: 80,
    colKey: "index",
    title: "序号",
  },
  {
    align: "center",
    colKey: "name",
    title: "用户名称",
  },
  {
    align: "center",
    colKey: "createTime",
    title: "创建时间",
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
const getList = () => {
  getUserList(list, { page: 1, size: 10 });
};

const handleDelete = ({ index }) => {
  list.value.splice(index - 1, 1);
};
onMounted(() => {
  // getList();
});
</script>

<style scoped></style>
