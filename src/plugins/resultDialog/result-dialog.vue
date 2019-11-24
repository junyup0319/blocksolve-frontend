<template>
  <div class="resultDialogWindow"
    v-if="ui.show">
    <div class="resultDialog">
      <div class="title-area">
        <div class="title">실행결과</div>
        <v-spacer></v-spacer>
        <v-btn text min-width="10" style="color: #fefefe;"
          @click="off">
          <v-icon>close</v-icon>
        </v-btn>
      </div>
      <div class="content-area">
        <div class="result-title" v-if="ui.isCorrect" style="color: #00b248;">" 맞았습니다 "</div>
        <div class="result-title" v-else style="color: #ff3232;">" 틀렸습니다 "</div>
        <div class="results">
          <div class="guide-area">
            <div class="guide-2">&nbsp;&nbsp;&nbsp;번호</div>
            <div class="guide-2">입력값</div>
            <div class="guide-2">예상출력값</div>
            <div class="guide-2">실제출력값</div>
            <div class="guide-1">결과</div>
          </div>
          <div class="testcase-area" v-for="(res, i) in testCaseResult" :key="'test-case-' + i">
            <div class="item item-2">test {{i+1}}</div>
            <div class="item item-2">{{res.input}}</div>
            <div class="item item-2">{{res.expectOutput}}</div>
            <div class="item item-2">{{res.output}}</div>
            <div v-if="res.result" class="item item-1 testcase-result" :correct="res.result">성공</div>
            <div v-else class="item item-1 testcase-result" :correct="res.result">실패</div>
          </div>
        </div>
      </div>
      <div class="button-area">
        <v-spacer></v-spacer>
        <v-btn dark color="rgb(65, 165, 211)" width="80" @click="off">확인</v-btn>
      </div>
    </div>
  </div>
</template>

<script src="./result-dialog.ts"/>

<style lang="scss" scoped>
.resultDialogWindow {
  z-index: 999;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.2);

  .resultDialog {
    width: 500px;
    height: 600px;
    border-radius: 8px;
    background: #fefefe;
    display: flex;
    flex-direction: column;
    .title-area {
      height: 60px;
      display: flex;
      align-items: center;
      padding-left: 16px;
      padding-right: 4px;
      background: rgb(65, 165, 211);
      border-radius: 8px 8px 0 0;
      .title {
        font-size: 20px;
        font-weight: 600;
        color: #fefefe;
      }
    }
    .content-area {
      flex: 1;
      padding: 20px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      .result-title {
        height: 10%;
        text-align: center;
        font-size: 24px;
      }
      .results {
        background: #f6f6f6;
        max-height: 90%;
        height: 90%;
        overflow-y: auto;
        border: solid 1px #ccc;
        padding: 8px 16px;
        .guide-area {
          width: 100%;
          height: 40px;
          display: flex;
          align-items: center;
          color: #777;
          font-weight: 600;
          margin-bottom: 8px;
          .guide-1 {
            flex: 1;
          }
          .guide-2 {
            flex: 2;
          }
        }
        .testcase-area {
          display: flex;
          align-items: center;
          color: #777;
          margin-bottom: 4px;
          .item {
            padding-left: 4px;  
          }
          .item-1 {
            flex: 1;
          }
          .item-2 {
            flex: 2;
          }
          .testcase-result {
            font-weight: 600;
            color: #ff3232;
            text-decoration: line-through;
            &[correct] {
              color: rgb(65, 165, 211);
              text-decoration: none;
            }
          }
        }
      }
    }
    .button-area {
      border-top: solid 1px #ccc;
      height: 52px;
      display: flex;
      align-items: center;
      padding: 0 16px;

    }
  }
  
}

</style>