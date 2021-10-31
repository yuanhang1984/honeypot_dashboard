"use strict";

class Index {
  /**
   * 构造函数
   */
  constructor() {
  }

  /**
   * 生成代码
   */
  generateCode() {
    ////////////////////////////////////////////////////////////////////////////
    // [创建对象]容器。
    ////////////////////////////////////////////////////////////////////////////
    this.container = new JSControl("div");
    ////////////////////////////////////////////////////////////////////////////
    // [创建对象]页头。
    ////////////////////////////////////////////////////////////////////////////
    this.pageHeader = new JSControl("div");
    ////////////////////////////////////////////////////////////////////////////
    // [创建对象]logo。
    ////////////////////////////////////////////////////////////////////////////
    this.logo = new JSControl("div");
    ////////////////////////////////////////////////////////////////////////////
    // [创建对象]统计区域。
    ////////////////////////////////////////////////////////////////////////////
    this.statisticsArea = new JSControl("div");
    ////////////////////////////////////////////////////////////////////////////
    // [创建对象]统计面板。
    ////////////////////////////////////////////////////////////////////////////
    this.statisticsPanel = new JSControl("div");
    ////////////////////////////////////////////////////////////////////////////
    // [创建对象]统计表格。
    ////////////////////////////////////////////////////////////////////////////
    this.statisticsTable = new JSControl("table");
    ////////////////////////////////////////////////////////////////////////////
    // [创建对象]数据列表区域。
    ////////////////////////////////////////////////////////////////////////////
    this.dataListArea = new JSControl("div");
    ////////////////////////////////////////////////////////////////////////////
    // [创建对象]页脚。
    ////////////////////////////////////////////////////////////////////////////
    this.pageFooter = new JSControl("div");
    ////////////////////////////////////////////////////////////////////////////
    // [设置属性]容器。
    ////////////////////////////////////////////////////////////////////////////
    this.container.setAttribute(
      {
        "class": "container"
      }
    );
    ////////////////////////////////////////////////////////////////////////////
    // [设置属性]页头。
    ////////////////////////////////////////////////////////////////////////////
    this.pageHeader.setAttribute(
      {
        "class": "page_header"
      }
    );
    ////////////////////////////////////////////////////////////////////////////
    // [设置属性]logo。
    ////////////////////////////////////////////////////////////////////////////
    this.logo.setAttribute(
      {
        "class": "logo"
      }
    );
    ////////////////////////////////////////////////////////////////////////////
    // [设置属性]统计区域。
    ////////////////////////////////////////////////////////////////////////////
    this.statisticsArea.setAttribute(
      {
        "class": "statistics_area"
      }
    );
    ////////////////////////////////////////////////////////////////////////////
    // [设置属性]统计面板。
    ////////////////////////////////////////////////////////////////////////////
    this.statisticsPanel.setAttribute(
      {
        "class": "statistics_panel"
      }
    );
    ////////////////////////////////////////////////////////////////////////////
    // [设置属性]统计表格。
    ////////////////////////////////////////////////////////////////////////////
    this.statisticsTable.setAttribute(
      {
        "class": "statistics_table"
      }
    );
    this.statisticsTable.setContent(`
      <thead>
        <tr>
          <td colspan = "3">Honeypot</td>
        </tr>
      </thead>
    `);
    ////////////////////////////////////////////////////////////////////////////
    // [设置属性]数据列表区域。
    ////////////////////////////////////////////////////////////////////////////
    this.dataListArea.setAttribute(
      {
        "class": "data_list_area"
      }
    );
    let lastUpdateDatetime = "";
    let profitValue = 0;
    let lossValue = 0;
    if (0 < dataSource.chart_data.length) {
      lastUpdateDatetime = dataSource.chart_data[dataSource.chart_data.length - 1].datetime;
      lastUpdateDatetime = lastUpdateDatetime.substring(5);
      profitValue = dataSource.chart_data[dataSource.chart_data.length - 1].profit_value;
      lossValue = dataSource.chart_data[dataSource.chart_data.length - 1].loss_value;
    }
    let walletCode = "";
    for (let i = 0; i < dataSource.wallet_array.length; i++) {
      let wallet = dataSource.wallet_array[i];
      let description = wallet.description;
      for (let j = 0; j < wallet.balance.length; j ++) {
        let balance = wallet.balance[j];
        walletCode += `
          <tr>
            <td>${description}-${balance.name}</td><td>${balance.amount}</td>
          </tr>
        `;
      }
    }
    let dataListTableCode = `
      <table class = "data_list_table">
        <thead>
          <tr>
            <td colspan = "2" style = "text-align: left;">${lastUpdateDatetime}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>浮盈</td><td>${profitValue}</td>
          </tr>
          <tr>
            <td>浮亏</td><td>${lossValue}</td>
          </tr>
          ${walletCode}
          <tr>
            <td>当前亏损</td><td>${dataSource.current_loss_amount}</td>
          </tr>
          <tr>
            <td>接收订单数量</td><td>${dataSource.receive_order_count}&nbsp;个</td>
          </tr>
          <tr>
            <td>发送订单数量</td><td>${dataSource.send_order_count}&nbsp;个</td>
          </tr>
          <tr>
            <td>HACK订单数量</td><td>${dataSource.hack_order_count}&nbsp;个</td>
          </tr>
          <tr>
            <td>最新块时间</td><td>${dataSource.last_block_datetime.substring(5)}</td>
          </tr>
          <tr>
            <td>最新订单接收时间</td><td>${dataSource.last_receive_datetime.substring(5)}</td>
          </tr>
          <tr>
            <td>最新订单发送时间</td><td>${dataSource.last_send_datetime.substring(5)}</td>
          </tr>
        </tbody>
      </table>
      <div id = "profit_chart_${dataSource.uuid}" class = "profit_chart"></div>
    `;
    this.dataListArea.setContent(dataListTableCode);
    ////////////////////////////////////////////////////////////////////////////
    // [设置属性]页脚。
    ////////////////////////////////////////////////////////////////////////////
    this.pageFooter.setAttribute(
      {
        "class": "page_footer"
      }
    );
    this.pageFooter.setContent(`©${new Date().getFullYear()}&nbsp;Honeypot`);
    ////////////////////////////////////////////////////////////////////////////
    // [生成代码]容器。
    ////////////////////////////////////////////////////////////////////////////
    this.container.generateCode();
    ////////////////////////////////////////////////////////////////////////////
    // [生成代码]页头。
    ////////////////////////////////////////////////////////////////////////////
    this.pageHeader.generateCode();
    ////////////////////////////////////////////////////////////////////////////
    // [生成代码]logo。
    ////////////////////////////////////////////////////////////////////////////
    this.logo.generateCode();
    ////////////////////////////////////////////////////////////////////////////
    // [生成代码]统计区域。
    ////////////////////////////////////////////////////////////////////////////
    this.statisticsArea.generateCode();
    ////////////////////////////////////////////////////////////////////////////
    // [生成代码]统计面板。
    ////////////////////////////////////////////////////////////////////////////
    this.statisticsPanel.generateCode();
    ////////////////////////////////////////////////////////////////////////////
    // [生成代码]统计表格。
    ////////////////////////////////////////////////////////////////////////////
    this.statisticsTable.generateCode();
    ////////////////////////////////////////////////////////////////////////////
    // [生成代码]数据列表区域。
    ////////////////////////////////////////////////////////////////////////////
    this.dataListArea.generateCode();
    ////////////////////////////////////////////////////////////////////////////
    // [生成代码]页脚。
    ////////////////////////////////////////////////////////////////////////////
    this.pageFooter.generateCode();
  }

  /**
   * 初始化视图
   */
  initView() {
    ////////////////////////////////////////////////////////////////////////////
    // [注释说明]页面添加容器。
    ////////////////////////////////////////////////////////////////////////////
    $("body").html(this.container.getCode());
    ////////////////////////////////////////////////////////////////////////////
    // [注释说明]容器添加页头。
    ////////////////////////////////////////////////////////////////////////////
    this.container.getObject().append(this.pageHeader.getCode());
    ////////////////////////////////////////////////////////////////////////////
    // [注释说明]容器添加logo。
    ////////////////////////////////////////////////////////////////////////////
    this.container.getObject().append(this.logo.getCode());
    ////////////////////////////////////////////////////////////////////////////
    // [注释说明]容器添加统计区域。
    ////////////////////////////////////////////////////////////////////////////
    this.container.getObject().append(this.statisticsArea.getCode());
    ////////////////////////////////////////////////////////////////////////////
    // [注释说明]统计区域添加统计面板。
    ////////////////////////////////////////////////////////////////////////////
    this.statisticsArea.getObject().append(this.statisticsPanel.getCode());
    ////////////////////////////////////////////////////////////////////////////
    // [注释说明]统计面板添加统计表格。
    ////////////////////////////////////////////////////////////////////////////
    this.statisticsPanel.getObject().append(this.statisticsTable.getCode());
    ////////////////////////////////////////////////////////////////////////////
    // [注释说明]容器添加数据列表区域。
    ////////////////////////////////////////////////////////////////////////////
    this.container.getObject().append(this.dataListArea.getCode());
    ////////////////////////////////////////////////////////////////////////////
    // [注释说明]容器添加页脚。
    ////////////////////////////////////////////////////////////////////////////
    this.container.getObject().append(this.pageFooter.getCode());
  }

  /**
   * 初始化布局
   */
  initLayout() {
    ////////////////////////////////////////////////////////////////////////////
    // [注释说明]设置logo的绝对位置。
    ////////////////////////////////////////////////////////////////////////////
    let pageHeaderWidth = this.pageHeader.getObject().get(0).getBoundingClientRect().width;
    let pageHeaderHeight = this.pageHeader.getObject().get(0).getBoundingClientRect().height;
    let logoWidth = this.logo.getObject().get(0).getBoundingClientRect().width;
    let logoHeight = this.logo.getObject().get(0).getBoundingClientRect().height;
    let logoTop = pageHeaderHeight - logoHeight + (logoHeight / 2);
    let logoLeft = (pageHeaderWidth - logoWidth) / 2;
    this.logo.getObject().css("top", logoTop + "px");
    this.logo.getObject().css("left", logoLeft + "px");
  }

  /**
   * 初始化事件
   */
  initEvent() {
    let profitRecord = new Array();
    let lossRecord = new Array();
    let datetimeRecord = new Array();
    for (let i = 0; i < dataSource.chart_data.length; i++) {
      let chartData = dataSource.chart_data[i];
      profitRecord.push(chartData.profit_value);
      lossRecord.push(chartData.loss_value);
      datetimeRecord.push(chartData.datetime);
    }
    let option = {
      color: [
        "#80a8ff", // 浮盈颜色
        "#f7c3a7" // 浮亏颜色
      ],
      backgroundColor: "#f5f5f5",
      tooltip: {
        trigger: "axis"
      },
      grid: {
        top: "6%",
        right: "2%",
        bottom: "0%",
        left: "1%",
        containLabel: true
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        show: false,
        data: datetimeRecord
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          name: "已交易卖单盈利交易记录",
          type: "line",
          data: profitRecord
        },
        {
          name: "未交易卖单亏损交易记录",
          type: "line",
          data: lossRecord
        }
      ]
    };
    let profitChartObj = echarts.init(document.getElementById("profit_chart_" + dataSource.uuid));
    profitChartObj.setOption(option);
  }
}
