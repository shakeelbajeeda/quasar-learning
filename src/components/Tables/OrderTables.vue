<template>
  <q-table
    :grid="$q.screen.lt.md ? true : false"
    title="Treats"
    :rows="rows"
    :columns="columns"
    row-key="name"
  />
</template>

<script>
const columns = [
  {
    name: "name",
    required: true,
    label: "Orders #",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "vehicle",
    align: "center",
    label: "Vehicle",
    field: "vehicle",
    sortable: true,
  },
  { name: "balance", label: "Balance", field: "balance", sortable: true },
];

const rows = [
  {
    name: "7069",
    vehicle: "2010 Toyota Camry",
    balance: 0,
  },
  {
    name: "7068",
    vehicle: "2010 Honda City",
    balance: 0,
  },
  {
    name: "7067",
    vehicle: "2010 Toyota corolla",
    balance: 0,
  },
  {
    name: "7066",
    vehicle: "2018 Honda Civic",
    balance: 0,
  },
  {
    name: "7005",
    vehicle: "2015 Toyota Camry",
    balance: 0,
  },
];

export default {
  setup() {
    return {
      columns,
      rows,
    };
  },
};
</script>
