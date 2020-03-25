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
  var hot = new Handsontable(container, {
    data: data,
    className: "htCenter htMiddle", 
    colHeaders: ['语言名称','排名','升或降','变化幅度'],
    colHeaders: true,
    rowHeights: 50,
    colWidths: 200,
  });