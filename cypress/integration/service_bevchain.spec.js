/// <reference types="cypress" />

describe('DTC_Service_Standard', function() {
    it('Test getVehicleMaster', function() {
       cy.request({
          method : 'POST',
          url : 'http://203.150.210.30:3000/push_gps_realtime',
          body: {
            "locations":[
                {"max_speed":null
                ,"over_speed_count":null
                ,"high_de_acc_count":null
                ,"gsm_rssi":0
                ,"lon":102.8704
                ,"mileage":0
                ,"ext_power":32
                ,"speed":0
                ,"engine_status":0
                ,"unit_id":"006000500000864507039765648"
                ,"utc_ts":"2019-04-30T07:53:28.0Z"
                ,"hdop":7
                ,"recv_utc_ts":"2019-04-30T07:53:30.0Z"
                ,"gsm_loc":0
                ,"course":255
                ,"event_code":"STOP"
                ,"fix":1
                ,"high_acc_count":null
                ,"alt":177
                ,"seq":461
                ,"driver_id":""
                ,"num_sats":12
                ,"gsm_cell":0
                ,"license":""
                ,"ext_power_status":1
                ,"lat":16.31474}
                ]
                ,"locations_count":1
                ,"vender_id":6
          },
          headers: {
             'content-type' : 'application/json'
          }
       }).then(function (response){
          
            expect(response.body).to.deep.equal({
                "code": "1",
                "message": "ok",
                "received_records": 1  
            })
       })
    })
})