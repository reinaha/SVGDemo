
//skills data
var skills = [
				{name:'HTML', value:90},
				{name:'CSS', value:85},
				{name:'Design', value:70},
				{name:'UX', value:60},
				{name:'JS', value:65}
			];

//build a colour generator

var colGen = d3.scaleOrdinal(d3.schemeAccent);

var chart = d3.select('#skills')
				.append('g')
				.attr('transform','translate(100,50)');

var bars = chart.selectAll('rect').data(skills);
bars.enter()
	.append('rect')
	.attr('fill',function(d,i){ return colGen(i)})
	.attr('width',50)
	.attr('height',function(d){ return d.value * 5})
	.attr('x',function(d,i){ return i*100 })
	.attr('y',function(d){ return 500 - d.value*5 });


var names = chart.selectAll('text').data(skills);

names.enter()
	.append('text')
	.text(function(d){ return d.name})
	.attr('y',500)
	.attr('x',function(d,i){ return i*100 + 25});












