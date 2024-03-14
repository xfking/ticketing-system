import { appStore } from "@/store";
import { filterList } from "@/utils/auth";

const app = appStore();
const getUserList = (list: API.CheckUserList, params: API.ListParams) => {
  app.getUserList(params).then((res: any) => {
    const { data } = res.data;
    list.value = filterList(data.list);
  });
};

export { getUserList };
