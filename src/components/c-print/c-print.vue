<!--
@createdBy 常九福
@date 2021/3/22
@description: 打印页面组件
-->
<template>
    <div class="c-print">
        <button @click="testPrint">test</button>
        <div ref="print">
            <h2>22222</h2>
            <h3>3333333</h3>
            <h4>4444444444</h4>
            <h5>5555555555555</h5>
            <table data-op-type="block-box" class="simple-table" border="1">
                <thead>
                <tr><th>ID</th><th>姓名</th><th>年龄</th></tr>
                </thead>
                <tbody class="nop-fill-box">
                <tr><td>1</td><td>张三</td><td>12</td></tr>
                <tr><td>2</td><td>张三</td><td>12</td></tr>
                <tr><td>3</td><td>张三</td><td>12</td></tr>
                <tr><td>4</td><td>张三</td><td>12</td></tr>
                <tr><td>5</td><td>张三</td><td>12</td></tr>
                <tr><td>6</td><td>张三</td><td>12</td></tr>
                <tr><td>7</td><td>张三</td><td>12</td></tr>
                <tr><td>8</td><td>张三</td><td>12</td></tr>
                <tr><td>9</td><td>张三</td><td>12</td></tr>
                <tr><td>10</td><td>张三</td><td>12</td></tr>
                <tr><td>1</td><td>张三</td><td>12</td></tr>
                <tr><td>2</td><td>张三</td><td>12</td></tr>
                <tr><td>3</td><td>张三</td><td>12</td></tr>
                <tr><td>4</td><td>张三</td><td>12</td></tr>
                <tr><td>5</td><td>张三</td><td>12</td></tr>
                <tr><td>6</td><td>张三</td><td>12</td></tr>
                <tr><td>7</td><td>张三</td><td>12</td></tr>
                <tr><td>8</td><td>张三</td><td>12</td></tr>
                <tr><td>9</td><td>张三</td><td>12</td></tr>
                <tr><td>10</td><td>张三</td><td>12</td></tr>
                <tr><td>1</td><td>张三</td><td>12</td></tr>
                <tr><td>2</td><td>张三</td><td>12</td></tr>
                <tr><td>3</td><td>张三</td><td>12</td></tr>
                <tr><td>4</td><td>张三</td><td>12</td></tr>
                <tr><td>5</td><td>张三</td><td>12</td></tr>
                <tr><td>6</td><td>张三</td><td>12</td></tr>
                <tr><td>7</td><td>张三</td><td>12</td></tr>
                <tr><td>8</td><td>张三</td><td>12</td></tr>
                <tr><td>9</td><td>张三</td><td>12</td></tr>
                <tr><td>10</td><td>张三</td><td>12</td></tr>
                <tr><td>1</td><td>张三</td><td>12</td></tr>
                <tr><td>2</td><td>张三</td><td>12</td></tr>
                <tr><td>3</td><td>张三</td><td>12</td></tr>
                <tr><td>4</td><td>张三</td><td>12</td></tr>
                <tr><td>5</td><td>张三</td><td>12</td></tr>
                <tr><td>6</td><td>张三</td><td>12</td></tr>
                <tr><td>7</td><td>张三</td><td>12</td></tr>
                <tr><td>8</td><td>张三</td><td>12</td></tr>
                <tr><td>9</td><td>张三</td><td>12</td></tr>
                <tr><td>10</td><td>张三</td><td>12</td></tr>
                <tr><td>1</td><td>张三</td><td>12</td></tr>
                <tr><td>2</td><td>张三</td><td>12</td></tr>
                <tr><td>3</td><td>张三</td><td>12</td></tr>
                <tr><td>4</td><td>张三</td><td>12</td></tr>
                <tr><td>5</td><td>张三</td><td>12</td></tr>
                <tr><td>6</td><td>张三</td><td>12</td></tr>
                <tr><td>7</td><td>张三</td><td>12</td></tr>
                <tr><td>8</td><td>张三</td><td>12</td></tr>
                <tr><td>9</td><td>张三</td><td>12</td></tr>
                <tr><td>10</td><td>张三</td><td>12</td></tr>
                <tr><td>1</td><td>张三</td><td>12</td></tr>
                <tr><td>2</td><td>张三</td><td>12</td></tr>
                <tr><td>3</td><td>张三</td><td>12</td></tr>
                <tr><td>4</td><td>张三</td><td>12</td></tr>
                <tr><td>5</td><td>张三</td><td>12</td></tr>
                <tr><td>6</td><td>张三</td><td>12</td></tr>
                <tr><td>7</td><td>张三</td><td>12</td></tr>
                <tr><td>8</td><td>张三</td><td>12</td></tr>
                <tr><td>9</td><td>张三</td><td>12</td></tr>
                <tr><td>10</td><td>张三</td><td>12</td></tr>
                <tr><td>1</td><td>张三</td><td>12</td></tr>
                <tr><td>2</td><td>张三</td><td>12</td></tr>
                <tr><td>3</td><td>张三</td><td>12</td></tr>
                <tr><td>4</td><td>张三</td><td>12</td></tr>
                <tr><td>5</td><td>张三</td><td>12</td></tr>
                <tr><td>6</td><td>张三</td><td>12</td></tr>
                <tr><td>7</td><td>张三</td><td>12</td></tr>
                <tr><td>8</td><td>张三</td><td>12</td></tr>
                <tr><td>9</td><td>张三</td><td>12</td></tr>
                <tr><td>10</td><td>张三</td><td>12</td></tr>
                <tr><td>1</td><td>张三</td><td>12</td></tr>
                <tr><td>2</td><td>张三</td><td>12</td></tr>
                <tr><td>3</td><td>张三</td><td>12</td></tr>
                <tr><td>4</td><td>张三</td><td>12</td></tr>
                <tr><td>5</td><td>张三</td><td>12</td></tr>
                <tr><td>6</td><td>张三</td><td>12</td></tr>
                <tr><td>7</td><td>张三</td><td>12</td></tr>
                <tr><td>8</td><td>张三</td><td>12</td></tr>
                <tr><td>9</td><td>张三</td><td>12</td></tr>
                <tr><td>10</td><td>张三</td><td>12</td></tr>
                <tr><td>1</td><td>张三</td><td>12</td></tr>
                <tr><td>2</td><td>张三</td><td>12</td></tr>
                <tr><td>3</td><td>张三</td><td>12</td></tr>
                <tr><td>4</td><td>张三</td><td>12</td></tr>
                <tr><td>5</td><td>张三</td><td>12</td></tr>
                <tr><td>6</td><td>张三</td><td>12</td></tr>
                <tr><td>7</td><td>张三</td><td>12</td></tr>
                <tr><td>8</td><td>张三</td><td>12</td></tr>
                <tr><td>9</td><td>张三</td><td>12</td></tr>
                <tr><td>10</td><td>张三</td><td>12</td></tr>
                <tr><td>1</td><td>张三</td><td>12</td></tr>
                <tr><td>2</td><td>张三</td><td>12</td></tr>
                <tr><td>3</td><td>张三</td><td>12</td></tr>
                <tr><td>4</td><td>张三</td><td>12</td></tr>
                <tr><td>5</td><td>张三</td><td>12</td></tr>
                <tr><td>6</td><td>张三</td><td>12</td></tr>
                <tr><td>7</td><td>张三</td><td>12</td></tr>
                <tr><td>8</td><td>张三</td><td>12</td></tr>
                <tr><td>9</td><td>张三</td><td>12</td></tr>
                <tr><td>10</td><td>张三</td><td>12</td></tr>
                <tr><td>1</td><td>张三</td><td>12</td></tr>
                <tr><td>2</td><td>张三</td><td>12</td></tr>
                <tr><td>3</td><td>张三</td><td>12</td></tr>
                <tr><td>4</td><td>张三</td><td>12</td></tr>
                <tr><td>5</td><td>张三</td><td>12</td></tr>
                <tr><td>6</td><td>张三</td><td>12</td></tr>
                <tr><td>7</td><td>张三</td><td>12</td></tr>
                <tr><td>8</td><td>张三</td><td>12</td></tr>
                <tr><td>9</td><td>张三</td><td>12</td></tr>
                <tr><td>10</td><td>张三</td><td>12</td></tr>
                <tr><td>1</td><td>张三</td><td>12</td></tr>
                <tr><td>2</td><td>张三</td><td>12</td></tr>
                <tr><td>3</td><td>张三</td><td>12</td></tr>
                <tr><td>4</td><td>张三</td><td>12</td></tr>
                <tr><td>5</td><td>张三</td><td>12</td></tr>
                <tr><td>6</td><td>张三</td><td>12</td></tr>
                <tr><td>7</td><td>张三</td><td>12</td></tr>
                <tr><td>8</td><td>张三</td><td>12</td></tr>
                <tr><td>9</td><td>张三</td><td>12</td></tr>
                <tr><td>10</td><td>张三</td><td>12</td></tr>
                <tr><td>1</td><td>张三</td><td>12</td></tr>
                <tr><td>2</td><td>张三</td><td>12</td></tr>
                <tr><td>3</td><td>张三</td><td>12</td></tr>
                <tr><td>4</td><td>张三</td><td>12</td></tr>
                <tr><td>5</td><td>张三</td><td>12</td></tr>
                <tr><td>6</td><td>张三</td><td>12</td></tr>
                <tr><td>7</td><td>张三</td><td>12</td></tr>
                <tr><td>8</td><td>张三</td><td>12</td></tr>
                <tr><td>9</td><td>张三</td><td>12</td></tr>
                <tr><td>10</td><td>张三</td><td>12</td></tr>
                <tr><td>1</td><td>张三</td><td>12</td></tr>
                <tr><td>2</td><td>张三</td><td>12</td></tr>
                <tr><td>3</td><td>张三</td><td>12</td></tr>
                <tr><td>4</td><td>张三</td><td>12</td></tr>
                <tr><td>5</td><td>张三</td><td>12</td></tr>
                <tr><td>6</td><td>张三</td><td>12</td></tr>
                <tr><td>7</td><td>张三</td><td>12</td></tr>
                <tr><td>8</td><td>张三</td><td>12</td></tr>
                <tr><td>9</td><td>张三</td><td>12</td></tr>
                <tr><td>10</td><td>张三</td><td>12</td></tr>
                <tr><td>1</td><td>张三</td><td>12</td></tr>
                <tr><td>2</td><td>张三</td><td>12</td></tr>
                <tr><td>3</td><td>张三</td><td>12</td></tr>
                <tr><td>4</td><td>张三</td><td>12</td></tr>
                <tr><td>5</td><td>张三</td><td>12</td></tr>
                <tr><td>6</td><td>张三</td><td>12</td></tr>
                <tr><td>7</td><td>张三</td><td>12</td></tr>
                <tr><td>8</td><td>张三</td><td>12</td></tr>
                <tr><td>9</td><td>张三</td><td>12</td></tr>
                <tr><td>10</td><td>张三</td><td>12</td></tr>
                <tr><td>1</td><td>张三</td><td>12</td></tr>
                <tr><td>2</td><td>张三</td><td>12</td></tr>
                <tr><td>3</td><td>张三</td><td>12</td></tr>
                <tr><td>4</td><td>张三</td><td>12</td></tr>
                <tr><td>5</td><td>张三</td><td>12</td></tr>
                <tr><td>6</td><td>张三</td><td>12</td></tr>
                <tr><td>7</td><td>张三</td><td>12</td></tr>
                <tr><td>8</td><td>张三</td><td>12</td></tr>
                <tr><td>9</td><td>张三</td><td>12</td></tr>
                <tr><td>10</td><td>张三</td><td>12</td></tr>
                </tbody>
<!--                <tfoot>-->
<!--                <tr><td colspan="3">表格尾部</td></tr>-->
<!--                </tfoot>-->
            </table>
            <table border="1">
                <thead>
                    <tr>
                        <th>日期</th>
                        <th>名字</th>
                        <th>地址</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in tableData" :key="index">
                        <td>{{item.date}}</td>
                        <td>{{item.name}}</td>
                        <td>{{item.address}}</td>
                    </tr>
                </tbody>
            </table>
            <div class="no-print">不要打印我</div>
        </div>
    </div>
</template>


<script>
    export default {
        name: "c-print",
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                },{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                },{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                },{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                },{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                },{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                },{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                },{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                },{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                },{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                },{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                },{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                },{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        },
        methods: {
            testPrint(){
                this.$print(this.$refs.print) // 使用
            }
        }
    };
</script>

<style scoped>
    table{
        border-collapse: collapse;
    }
    
    * {
        padding: 0;
        margin: 0;
        list-style-type: none;
        font-family: "微软雅黑";
        font-size: 12px;
    }

    .tab_company_out {
        text-align: center;
        width: 100%;
        margin: auto;
        page-break-after: always;
    }

    h3 {
        font-size: 14px;
    }

    .dan {
        text-align: center;
        position: relative;
    }

    .dan span {
        position: absolute;
        right: 0;
    }

    p {
        overflow: hidden;
        padding: 10px 0;
    }

    p span {
        float: left;
    }

    p span ins {
        text-decoration: underline;
    }

    p time {
        float: right;
    }

    table {
        width: 100%;
        border: none;
        border-bottom: 1px solid #000;
    }

    table tr td {
        border: 1px solid #000;
        border-bottom: none;
        border-right: none;
        height: 20px;
        line-height: 20px;
    }

    table tr td:last-of-type,
    table tr th:last-of-type {
        border-right: 1px solid #000;
    }

    table tr th {
        border-top: 1px solid #000;
        border-left: 1px solid #000;
        height: 22px;
        line-height: 22px;
        font-size: 12px;
    }

    table tr th:nth-child(2) {
        width: 0;
    }

    .lu {
        display: inline-block;
        padding-top: 10px;
    }

    .lu li {
        float: left;
        text-align: left;
        margin-right: 15px;
    }

    .lu li label {
        width: 100px;
        display: inline-block;
    }

    .lu li:last-of-type {
        margin-right: 0;
    }

    @page{
        /*size: auto A4 landscape;*/
        margin: 3mm;
    }
</style>
