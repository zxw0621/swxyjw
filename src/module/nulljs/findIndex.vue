<template>
<div>
  <div>查询页面</div>
  <div>
    <Form @submit="onSubmit">
      <div>
        <Field
          readonly
          clickable
          name="time"
          :value="mydate.value"
          label="日期"
          placeholder="点击选择日期"
          @click="mydate.showCalendar = true"
          :rules="[{ required: true, message: '请选择日期' }]"
        />
        <Calendar
          v-model="mydate.showCalendar"
          @confirm="onConfirm1"
          :show-confirm="false"
          row-height="50"
        />
      </div>
      <div>
        <Field
          readonly
          clickable
          name="idleTime"
          :value="jc.value"
          label="节次"
          placeholder="点击选择节次"
          @click="jc.showPicker = true"
          :rules="[{ required: true, message: '请选择节次' }]"
        />
        <Popup v-model="jc.showPicker" position="bottom">
          <Picker
            show-toolbar
            :columns="jc.columns"
            @cancel="jc.showPicker = false"
            @confirm="onConfirm2"
          />
        </Popup>
      </div>
      <div>
        <Field
          readonly
          clickable
          name="jxlid"
          :value="jxl.value"
          label="教学楼"
          placeholder="点击选择教学楼"
          @click="jxl.showPicker = true"
          :rules="[{ required: true, message: '请选择教学楼' }]"
        />
        <Popup v-model="jxl.showPicker" position="bottom">
          <Picker
            show-toolbar
            :columns="jxl.columns"
            @cancel="jxl.showPicker = false"
            @confirm="onConfirm3"
          />
        </Popup>
      </div>
      <div style="margin: 16px;">
        <Button round block type="info" native-type="submit">
          提交
        </Button>
      </div>
    </Form>
  </div>
</div>
</template>

<script>
import { Field, Popup, Picker, Calendar, Button, Form } from 'vant'
export default {
  name: 'findIndex',
  components: {
    Field,
    Popup,
    Picker,
    Calendar,
    Button,
    Form
  },
  data () {
    return {
      mydate: {
        value: '',
        showCalendar: false
      },
      jc: {
        value: '',
        showPicker: false,
        keyId: '',
        columns: [
          { keyId: 2, text: '测试1' },
          { keyId: 10, text: '测试2' },
          { keyId: 31, text: '测试3' }
        ]
      },
      jxl: {
        value: '',
        showPicker: false,
        columns: [
          { keyId: 2, text: '测试1' },
          { keyId: 10, text: '测试2' },
          { keyId: 31, text: '测试3' }
        ]
      },
      params: {
        method: 'getKxJscx',
        time: '',
        idleTime: '',
        jxlid: '',
        classroomNumber: ''
      }
    }
  },
  methods: {
    onConfirm1 (date) {
      this.mydate.value = `${date.getUTCFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
      this.params.time = this.mydate.value
      this.mydate.showCalendar = false
    },
    onConfirm2 (value) {
      this.jc.showPicker = false
      this.jc.value = value.text
      this.params.idleTime = value.keyId
    },
    onConfirm3 (value) {
      this.jxl.showPicker = false
      this.jxl.value = value.text
      this.params.jxlid = value.keyId
    },
    onSubmit () {
      console.log(this.params)
    }
  }
}
</script>

<style scoped>

</style>
