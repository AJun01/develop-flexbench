/**
 * Scenario:
 * Generate requests towards specific domain
 **/
var trafficSimulator = require('../lib/main.js');


function runTest() {
    trafficSimulator.debugMode(true);
    trafficSimulator.testDuration(5);//-1 for infinite run
    trafficSimulator.workers(1);
    trafficSimulator.clients(2)
    trafficSimulator.throttleRequests_bps(50000);//no throttling
    trafficSimulator.randomDelayBetweenRequests('0.5-1.1');
    trafficSimulator.start(function (msg) {
        //This function will run on exit/stop, when worker has received a message to offload his stats to his master
        //Get from msg object all exposed metrics
        console.log('Traffic Simulator Results');
        console.log('-------------------------');

        var cArr=Object.keys(msg.counters);

        for(var i=0;i<cArr.length;i++){
            var key=cArr[i];
            console.log('counter %s: %s ',key, msg.counters[key]);
        }
        console.log("Exiting..");
        process.exit();
    },requestFunc);

    //stop test after specific period or condition\
    setTimeout(function () {
        trafficSimulator.stop();
    }, 20 * 1000);

}

/**
 * Create your generate request function here
 * */
var requestFunc= function(){
    //GENERATE REQUEST FUNCTION
    var headers = {
        "my-dummy-header": '1'
    };
    var options = {};
    options['host'] = 'www.example.com';
    options['port'] = '80';
    options['path'] = '/';
    options['method'] = 'GET';
    if (headers) {
        options['headers'] = headers;
    }

    var req=trafficSimulator.request(options,function(response){
        console.log("Response: %s",response.statusCode);
        response.setEncoding('utf8');
        response.on('data',function(chunk){
            console.log(chunk.length)
        });
    });

    req.on('error',function(err){
        console.log('error:'+err.message);
    });
}

runTest();