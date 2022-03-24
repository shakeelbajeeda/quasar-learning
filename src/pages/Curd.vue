<template>
  <q-page>
    <div :class="$q.screen.lt.sm ? 'q-mx-sm q-my-md' : 'q-mx-lg q-my-md'">
      <div class="text-h3 text-center">Vue Js Crud</div>
      <div class="col-md-12 q-mt-lg">
        <div class="row q-col-gutter-sm">
          <div class="col-md-3 col-xs-12">
            <q-input filled v-model="student.yourname" label="Enter Name" />
          </div>
          <div class="col-md-3 col-xs-12">
            <q-input
              filled
              v-model="student.fathername"
              label="Enter Father Name"
            />
          </div>
          <div class="col-md-3 col-xs-12">
            <q-input filled v-model="student.city" label="City" />
          </div>
          <div class="col-md-3 col-xs-12">
            <q-input filled v-model="student.province" label="Province" />
          </div>
          <div class="col-md-3 col-xs-12">
            <div class="q-mt-md">
              <span class="text-body1 text-bold">Gender</span>
              <q-radio
                v-model="student.gender"
                val="male"
                label="Male"
                size="sm"
              />
              <q-radio
                v-model="student.gender"
                val="female"
                label="Female"
                size="sm"
              />
            </div>
          </div>
          <div class="col-md-3 col-xs-12">
            <q-select
              label="Select Program"
              transition-show="flip-up"
              transition-hide="flip-down"
              filled
              v-model="student.program"
              :options="programs"
            />
          </div>
          <div class="col-md-3 col-xs-12">
            <q-select
              label="Select University"
              transition-show="flip-up"
              transition-hide="flip-down"
              filled
              v-model="student.university"
              :options="universities"
            />
          </div>
          <div class="col-md-3">
            <div class="text-center">
              <q-btn
                v-if="!is_update"
                @click="add_student"
                style="width: 100%; height: 55px"
                class="text-body1 text-bold text-capitalize"
                label="Add"
                icon-right="add"
                color="primary"
              />
              <q-btn
                v-if="is_update"
                @click="update_student"
                style="width: 100%; height: 55px"
                class="text-body1 text-bold text-capitalize"
                label="update"
                icon-right="update"
                color="orange-5"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12 q-my-md">
        <div>
          <q-table
            :grid="$q.screen.lt.md ? true : false"
            title="Student Data"
            :card-class="$q.screen.lt.md ? 'text-white bg-primary' : ''"
            :rows="student_data"
            @row-click="rowClicked"
            :columns="columns"
            row-key="name"
          >
            <template v-slot:body-cell-actions="props">
              <q-td :props="props">
                <q-btn
                  v-for="action in actions"
                  :key="action"
                  v-bind="action"
                  label=""
                  @click="handle_function_call(action.event, props)"
                  round
                  class="q-ml-sm"
                  flat
                />
              </q-td>
            </template>
          </q-table>
        </div>
      </div>
      <div>
        <q-ajax-bar ref="bar" color="light-blue" size="5px" skip-hijack />
      </div>
    </div>
  </q-page>
  <PopupMenu
    :actions="actions"
    :visible="actionsDialog"
    @actionClicked="actionClicked"
    @isModalVisible="isModalVisible"
  />
</template>
<script>
import { Notify } from "quasar";
import { defineComponent, ref } from "vue";
import InputTable from "src/components/common/InputTable.vue";
import PopupMenu from "src/components/common/PopupMenu.vue";
export default defineComponent({
  name: "Curd",
  components: {
    InputTable,
    PopupMenu,
  },
  data() {
    let columns2 = [
      {
        name: "name",
        label: "Name",
        align: "left",
        field: "yourname",
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
      {
        name: "province",
        label: "Province",
        field: "province",
        sortable: true,
      },
      { name: "gender", label: "Gender", field: "gender", sortable: true },
      { name: "program", label: "Program", field: "program", sortable: true },
      {
        name: "university",
        label: "University",
        field: "university",
        sortable: true,
        sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
      },
    ];
    //  if (this.$q.screen.gt.xs) {
    columns2.push({
      name: "actions",
      label: "Actions",
      field: "hello",
      align: "center",
    });
    // }
    return {
      actionsDialog: false,
      selectedRow: false,
      id: 1,
      data_index: -1,
      student: {
        id: 1,
        yourname: null,
        fathername: null,
        city: null,
        province: null,
        gender: null,
        program: null,
        university: null,
      },
      programs: ["BS(CS)", "BS(IT)", "BS(SE)", "BS English", "BS Physics"],
      universities: ["UCP", "UMT", "UOL", "COMSATS", "NUML"],
      is_update: false,
      student_data: [],
      columns: columns2,
      actions: [
        {
          icon: "edit",
          label: "Edit Student",
          event: "editStudent",
          color: "light-blue",
        },
        {
          icon: "delete",
          label: "Delete Student",
          event: "deleteStudent",
          color: "red",
        },
      ],
    };
  },
  methods: {
    handle_function_call(function_name, row_data) {
      this[function_name](row_data);
    },
    isModalVisible(val) {
      this.actionsDialog = val;
    },
    rowClicked(event, row) {
      if (this.$q.screen.lt.md && this.actions.length) {
        this.actionsDialog = true;
        this.selectedRow = row;
      }
    },
    actionClicked(event) {
      this.actionsDialog = false;
      const action = event.target.offsetParent.getAttribute("data-event");
      console.log(action);
      let row_data = { row: this.selectedRow };
      this[action](row_data);
    },
    deleteStudent(data) {
      let index = this.student_data.findIndex(
        (student) => student.id == data.row.id
      );
      if (index !== -1) {
        this.student_data.splice(index, 1);
      }
      // this.student_data.splice(this.student, 1);
      Notify.create({
        type: "negative",
        position: "top",
        message: "student removed",
        icon: "delete",
      });
    },
    editStudent(data) {
      this.student = JSON.parse(JSON.stringify(data.row));
      this.is_update = true;
      this.data_index = this.student_data.findIndex(
        (student) => student.id == data.row.id
      );
    },
    update_student() {
      this.student_data[this.data_index] = JSON.parse(
        JSON.stringify(this.student)
      );
      this.is_update = false;
      Notify.create({
        type: "info",
        position: "top",
        message: "Student Updated",
        icon: "update",
      });
      // this.student_data[1]
    },
    add_student() {
      if (
        this.student.yourname &&
        this.student.fathername &&
        this.student.city &&
        this.student.province &&
        this.student.gender &&
        this.student.program &&
        this.student.university
      ) {
        this.student.id = this.id;
        let unreactive_student = JSON.parse(JSON.stringify(this.student));
        this.student_data.push(unreactive_student);
        this.id++;
        console.log(this.student_data);
        Notify.create({
          type: "positive",
          position: "top",
          message: "Student Added Successfully",
        });
      } else {
        Notify.create({
          type: "negative",
          position: "top",
          message: "Please fill all the fileds",
        });
      }
    },
  },
});
</script>
