<template>
  <div class="q-pa-md">
    <q-table
      :grid="$q.screen.lt.md ? true : false"
      title="Student Data"
      :rows="rows"
      :columns="columns"
      row-key="name"
    />
  </div>
</template>

<script>
const columns = [
  {
    name: "name",
    required: true,
    label: "Name",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "fathername",
    align: "center",
    label: "Father Name",
    field: "fathername",
    sortable: true,
  },
  { name: "city", label: "City", field: "city", sortable: true },
  { name: "province", label: "Province", field: "province" },
  { name: "gender", label: "Gender", field: "gender" },
  { name: "program", label: "Program", field: "program" },
  {
    name: "university",
    label: "University",
    field: "university",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
];

// const rows = [
//   {
//     name: "Shakeel Ahmad",
//     fathername: "Bajeeda",
//     city: "Lahore",
//     province: "Punjab",
//     gender: "Male",
//     program: "BS(CS)",
//     university: "VU",
//   },
// ];

export default {
  props: ['rows'],
  setup() {
    return {
      columns,
    };
  },
  data() {
    return {

    }
  },
  created() {
    console.log('got here', this.rows)
  }
};
</script>
