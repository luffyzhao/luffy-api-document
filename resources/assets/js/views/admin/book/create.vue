<template>
<div>
  <Modal title="创建项目" v-model="modalShow" :mask-closable="false" @on-visible-change="visibleChange" class-name="vertical-center-modal" width="auto" @on-ok="submit" ok-text="提交">
      <Form ref="formItem" :model="formItem" :rules="formRules" :label-width="100">
        <FormItem label="项目名称" prop="name">
          <Input v-model="formItem.name" placeholder="Enter something..." style="width:500px;"></Input>
        </FormItem>

        <FormItem label="项目唯一标识" prop="identify">
            <Input v-model="formItem.identify"></Input>
        </FormItem>

        <FormItem label="状态" prop="status">
            <i-switch v-model="formItem.status" :true-value="1" :false-value="0">
                <span slot="open">开</span>
                <span slot="close">关</span>
            </i-switch>
        </FormItem>

        <FormItem label="项目说明">
          <Input v-model="formItem.description" type="textarea" :rows="4" placeholder="Enter something..."></Input>
        </FormItem>
      </Form>

      <div slot="footer">
        <Button type="primary" size="large" :loading="loadingVisible" @click="submit('formItem')">提交</Button>
      </div>
  </Modal>
</div>
</template>

<script>

export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    modalShow: {
      get() {
        return this.show
      },
      set() {}
    }
  },
  data () {
    return {
      loadingVisible: false,
      formItem: {
        name: '',
        identify: '',
        status: 1,
        description: ''
      },
      formRules: {
        name: [
          { required: true, message: '项目名称不能为空', trigger: 'blur' },
          { max: 50, message: '项目名称最多只能50个字符', trigger: 'blur' }
        ],
        description: [
          { message: '项目说明最多500个字符', pattern: /^\.{0,500}$/, trigger: 'blur'}
        ],
        identify: [
          { required: true, message: '项目标识只能包含小写字母、数字，以及“-”和“_”符号,并且只能小写字母开头', pattern: /^[a-z]+[0-9a-zA-Z-_]*$/, trigger: 'blur'}
        ],
        status: [
          { message: '项目状态必须选择', pattern: /^[0-1]{1}$/, trigger: 'change'}
        ]
      }
    }
  },
  methods: {
    visibleChange(visible) {
      if (visible === false) {
        this.$emit('visibleChange', visible)
      }
    },
    submit(name){
      this.loadingVisible = true
      this.$refs[name].validate((valid) => {
          if (valid) {
            this.$post('admin/book', {
              name : this.formItem.name,
              identify : this.formItem.identify,
              status : this.formItem.status,
              description : this.formItem.description,
            }).then((res) => {
              this.visibleChange(false)
              this.$Message.error('数据请求成功!');
            })
          }
      })
      this.loadingVisible = false
    }
  }
}
</script>

<style lang="less">
.vertical-center-modal {
    display: flex;
    align-items: center;
    justify-content: center;

    .ivu-modal {
        top: 0;
    }
}

</style>
