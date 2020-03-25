$(function() {
    //初始化ehcharts实例
    var myChart=echarts.init(document.getElementById("main"));
    //指定图表的配置项和数据
    var option={
        //标题
        title:{
          text:'JavaScript语言排名变化'
        },
        //工具箱
        //保存图片
        toolbox:{
            show:true,
            feature:{
                saveAsImage:{
                    show:true
                }
            }
        },
        //图例-每一条数据的名字叫排名
        legend:{
            data:['排名']
        },
        tooltip: {
            trigger: 'axis'
          },  
        //x轴
        xAxis:{
            data:["2000","2005","2010","2015","2020"]
        },
        //y轴没有显式设置，根据值自动生成y轴
        yAxis:{},
        //数据-data是最终要显示的数据
        series:[{
            name:'排名',
            type:'line',
            data:[6,9,8,8,7],
        }]
    };
    //使用刚刚指定的配置项和数据项显示图表
    myChart.setOption(option);
    var data =[
        ['java',1,'降','-0.01%'],
        ['C',2,'升','+2.44%'],
        ['Python',3,'升','+1.41%'],
        ['C++',4,'降','-2.58%'],
        ['C#',5,'升','+2.07%'],
        ['Visual Basic .NET',6,'降','-1.17%'],
        ['JavaScript',7,'降','-0.85%']
    ];
      var container = document.getElementById('example');
      new Handsontable(container, {
        data: data,
        rowHeights: 50,
        colWidths: 270,
        className: "htCenter htMiddle",
        colHeaders: true,
        colHeaders: ['语言名称','排名','升或降','变化幅度'],

    });
  });