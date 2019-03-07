var dataP = d3.csv("coal.csv");
var drawChart=function(coal)
{
var width=1000;
var height=200;
var barWidth=.5*width/coal.length;

var svg=
d3.select("svg")
.attr("width", width)
.attr("height", height)

svg.selectAll("rect")
.data(coal)
.enter()
.append("rect")
.attr("x", function(d,i)
  {return i*barWidth*1.5;})
.attr("y", function(d)
  {return height-d.employees/500})
.attr("width", barWidth)
.attr("height", function(d)
  {return d.employees/500})
.attr("fill", "black");
}

var drawLabels=function(coal)
{
  var width=1000;
  var height=200;
  var barWidth=.5*width/coal.length;
  var svg=
  d3.select("svg")
  .attr("width", width)
  .attr("height", height)
svg.selectAll("text")
.data(coal)
.enter()
.append("text")
.text(function(d){
  return d.employees;
  return d.year;})
.attr("x", function(d,i)
  {return i*barWidth*1.5+5;})
.attr("y", function(d)
  {return height-d.employees/500+20})
.attr("fill", "white")
}

var drawBottomLabels=function(coal){
var width=1000;
var height=200;
var barWidth=.5*width/coal.length;

var svg=
d3.select("svg")
.attr("width", width)
.attr("height", height)

svg.selectAll("text.Year")
.data(coal)
.enter()
.append("text")
.attr("class", "Year")
.text(function(d){
  return d.year;})
.attr("x", function(d,i)
  {return i*barWidth*1.5+7;})
.attr("y", 195)
.attr("fill", "yellow")}





dataP.then(function(dataP)
{
drawChart(dataP);
drawLabels(dataP);
drawBottomLabels(dataP);
})



/*var year=svg.apend("text")
.text("hello")
.attr("x", "400")
.attr("y", "500")*/
