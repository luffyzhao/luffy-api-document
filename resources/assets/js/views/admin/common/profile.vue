<template lang="html">
    <div>
      <Card :bordered="false">
        <p slot="title"><Icon type="ios-person"></Icon>个人信息</p>
        <div>
          <Form :model="form" ref="form" label-position="right" :label-width="100">
            <FormItem label="用户姓名:" prop="username" :rules="{required: true, message: '用户姓名不能为空！', trigger: 'blur'}">
              <Input v-model="form.username" style="width: 300px"></Input>
            </FormItem>
            <FormItem label="登录邮箱:" prop="email" :rules="{required: true, type: 'email', message: '请输出正确的邮箱号码！', trigger: 'blur'}">
              <Input v-model="form.email" style="width: 300px"></Input>
            </FormItem>
            <FormItem label="手机号码:" prop="phone" :rules="{pattern: /^1[0-9]{10}$/, message: '手机号码格式不正确！', trigger: 'blur'}">
              <Input v-model="form.phone" style="width: 300px"></Input>
            </FormItem>
            <FormItem label="登录密码:">
              <Button type="text" @click="setPassword = true">修改密码</Button>
            </FormItem>
            <FormItem>
              <Button type="primary" @click="submit('form')" style="width: 100px">保存</Button>
            </FormItem>
          </Form>
        </div>
      </Card>

      <Modal ref="modalSetPassword" v-model="setPassword" title="修改密码" ok-text="提交" cancel-text="取消" :loading="true" @on-ok="handlePassword">
        <Form ref="formSetPassword" :model="formSetPassword" :label-width="100">
          <FormItem label="原密码" prop="old_password" :rules="{required: true, message: '原密码不能为空！', trigger: 'blur'}">
            <Input type="password" v-model="formSetPassword.old_password"></Input>
          </FormItem>
          <FormItem label="新密码" prop="password" :rules="{required: true, message: '密码不能为空！', trigger: 'blur'}">
            <Input type="password" v-model="formSetPassword.password"></Input>
          </FormItem>
          <FormItem label="确认密码" prop="password_confirmation" :rules="{required: true, message: '确认密码不能为空！', trigger: 'blur'}">
            <Input type="password" v-model="formSetPassword.password_confirmation"></Input>
          </FormItem>
        </Form>
      </Modal>
    </div>
</template>

<script lang="babel">
export default {
  data () {
    return {
      form: {
        username: '',
        email: '',
        phone: ''
      },
      formSetPassword: {
        old_password: '',
        password: '',
        password_confirmation: ''
      },
      setPassword: false
    }
  },
  mounted () {
    this.$get('admin/auth/me').then((res) => {
      this.form = res.data;
    })
  },
  methods: {
    handlePassword (e) {
      this.$put('admin/auth/password', this.formSetPassword).then((res) => {
        this.$Message.success('密码修改成功!');
        this.$refs['modalSetPassword'].close();
      })
    },
    submit(name){
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$put('admin/auth/update', this.form).then((res) => {
            this.$Message.success('修改成功!');
          })
        }
      });
    }
  },
  components: {}
}
</script>

<style lang="scss">

</style>
