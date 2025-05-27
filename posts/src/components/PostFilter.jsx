import MyInput from "../ui/input/MyInput";
import MySelect from "../ui/select/MySelect";

const PostFilter = ({ filter, setFilter, limit, setLimit }) => {
  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder="Search"
      />
      <MySelect
        style={{ marginRight: "5px" }}
        value={filter.sort}
        onChange={(e) => setFilter({ ...filter, sort: e })}
        defaultValue="Sorting"
        options={[
          { id: 1, value: "title", name: "By name" },
          { id: 2, value: "body", name: "By description" },
        ]}
      />
      <MySelect
        value={limit}
        onChange={(value) => setLimit(value)}
        defaultValue="Number of items per page"
        options={[
          { id: 1, value: 5, name: "5" },
          { id: 2, value: 10, name: "10" },
          { id: 3, value: 15, name: "15" },
          { id: 4, value: 20, name: "20" },
          { id: 5, value: -1, name: "Show all" },
        ]}
      />
    </div>
  );
};

export default PostFilter;
