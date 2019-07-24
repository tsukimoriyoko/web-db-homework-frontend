
<template>
  <div>
    <a-card :bordered="false">
      <a-row>
        <a-col :sm="8" :xs="24">
          <head-info title="校庆101" content="小哥哥最帅" :bordered="true"/>
        </a-col>
        <a-col :sm="8" :xs="24">
          <head-info title="校庆101" content="小姐姐最美" :bordered="true"/>
        </a-col>
        <a-col :sm="8" :xs="24">
          <head-info title="校庆101" content="快来投票吧"/>
        </a-col>
      </a-row>
    </a-card>
    <a-card
      style="margin-top: 24px"
      :bordered="false"
      title="所有投票">

      <!--<a-list size="large" :pagination="{showSizeChanger: true, showQuickJumper: true, pageSize: 5, total: 50}">-->
        <a-list-item :key="index" v-for="(item, index) in data">
          <a-list-item-meta :description="item.abstract">
            <a slot="title">{{ item.title }}</a>
          </a-list-item-meta>
          <div slot="actions">
            <router-link to="../create-vote/TaskForm">投票</router-link>
          </div>
          <div class="list-content">
            <div class="list-content-item">
              <span>开始时间</span>
              <p>{{ item.start_time }}</p>
            </div>
            <div class="list-content-item">
              <span>结束时间</span>
              <p>{{ item.end_time }}</p>
            </div>
          </div>
        </a-list-item>
      <!--</a-list>-->

      <task-form ref="taskForm" />
    </a-card>
  </div>
</template>
<script>
import HeadInfo from '@/components/tools/HeadInfo'
import TaskForm from './modules/TaskForm'
import { getallvote } from '@/api/allvote'

export default {
  name: 'StandardList',
  components: {
    HeadInfo,
    TaskForm
  },
  data () {
    return {
      data: {}
    }
  },
  mounted: function () {
    this.getall()
  },
  methods: {
    getall () {
      const { $message } = this
      getallvote().then(res => {
        this.data = res
      }).catch(err => {
        $message.error(`load user err: ${err.message}`)
      })
    }
  }
}
</script>

<style lang="less" scoped>
    .ant-avatar-lg {
        width: 48px;
        height: 48px;
        line-height: 48px;
    }

    .list-content-item {
        color: rgba(0, 0, 0, .45);
        display: inline-block;
        vertical-align: middle;
        font-size: 14px;
        margin-left: 40px;
        span {
            line-height: 20px;
        }
        p {
            margin-top: 4px;
            margin-bottom: 0;
            line-height: 22px;
        }
    }
</style>
