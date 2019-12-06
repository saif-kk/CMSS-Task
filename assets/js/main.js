
$(document).ready(function () {

    !function ($) {
        "use strict";
        $(window).on('load',function () {
            var width = $(window).width();
            if (width <= 785) {
                $('.topbar-main').css('display','block');
            } else {
                $('.topbar-main').css('display','none');
            }
        }); 

        var MorrisCharts = function () { };

        var FlotChart = function() {
            this.$body = $("body")
            this.$realData = []
        };

        MorrisCharts.prototype.createBarChart = function (element, data, xkey, ykeys, labels, lineColors) {
            Morris.Bar({
                element: element,
                data: data,
                xkey: xkey,
                ykeys: ykeys,
                labels: labels,
                hideHover: 'auto',
                resize: true, //defaulted to true
                gridLineColor: '#eeeeee',
                barColors: lineColors
            });
        },

       
        MorrisCharts.prototype.init = function () {
                var $barData = [
                    { y: '', a: 150, b: 180 },
                    { y: '', a: 110, b: 140 },
                    { y: '', a: 90, b: 120 },
                    { y: '', a: 110, b: 135 },
                    { y: '', a: 160, b: 170 },
                    { y: '', a: 160, b: 180 },
                    { y: '', a: 140, b: 150 },
                    { y: '', a: 100, b: 140 },
                    { y: '', a: 110, b: 150 },
                    { y: '', a: 120, b: 130 },
                    { y: '', a: 120, b: 130 }
                ];
                this.createBarChart('graph-user', $barData, 'y', ['a', 'b'], ['Bounce Rate', 'New Users'], ["#65a3fa", "#64e0e2"]);

                //creating donut chart
                // var $donutData = [
                //     { label: "Organic Search", value: 25 },
                //     { label: "Email", value: 20 },
                //     { label: "Referral", value: 30 },
                //     { label: "Social Media", value: 25 }
                // ];
                // this.createDonutChart('pie-chart-ex', $donutData, ["#ee83b7", "#65a3fa", "#64e0e2", "#f5c094"]);

        },

        //creates Pie Chart
        FlotChart.prototype.createDonutGraph = function(selector, labels, datas, colors) {
            var data = [{
                label : labels[0],
                data : datas[0]
            }, {
                label : labels[1],
                data : datas[1]
            }, {
                label : labels[2],
                data : datas[2]
            }, {
                label : labels[3],
                data : datas[3]
            }];
            var options = {
                series : {
                    pie : {
                        show : true,
                        innerRadius : 0.5
                    }
                },
                legend : {
                    show : true,
                    labelFormatter : function(label, series) {
                        return '<div style="font-size:14px;">&nbsp;' + label + '</div>'
                    },
                    labelBoxBorderColor : null,
                    margin : 50,
                    width : 20,
                    padding : 1
                },
                grid : {
                    hoverable : true,
                    clickable : false
                },
                colors : colors,
                tooltip : true,
                tooltipOpts : {
                    content : "%s, %p.0%"
                }
            };

            $.plot($(selector), data, options);
        },

        FlotChart.prototype.init = function() {
            //Donut pie graph data
            var donutlabels = ["Organic Search", "Email", "Referral", "Social Media"];
            var donutdatas = [25, 20, 30, 25];
            var donutcolors = ["#ee83b7", "#65a3fa", "#64e0e2", "#f5c094"];
            this.createDonutGraph("#pie-chart #pie-chart-ex", donutlabels, donutdatas, donutcolors);
            
        },

        $.MorrisCharts = new MorrisCharts, $.MorrisCharts.Constructor = MorrisCharts;
        
        $.FlotChart = new FlotChart, $.FlotChart.Constructor = FlotChart;

    }(window.jQuery),

        //initializing
        function ($) {
            "use strict";
            $.MorrisCharts.init();
            $.FlotChart.init();
        }(window.jQuery);

})
