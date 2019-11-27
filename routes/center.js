var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:centerId', function (req, res, next) {
  res.send('respond with a center');
});

router.get('/:centerId/room', function (req, res, next) {
  res.send('respond with a room');
});

router.get('/:centerId/room/:roomId/', function (req, res, next) {
  let room = [
    {
      "block_out_time_id": "83c057c1-166a-44e2-99c8-9feb2fb3040c",
      "employee": null,
      "room": {
        "id": "699ec863-c155-4c4b-bf58-5310a7d1df1c",
        "name": "15% Premium Room"
      },
      "block_out_time_type": {
        "id": 103,
        "name": "modelling",
        "duration": 15
      },
      "start_time": "2018-10-09T11:45:00",
      "end_time": "2018-10-09T11:45:00",
      "start_time_in_center": "2018-10-09T17:15:00",
      "end_time_in_center": "2018-10-09T17:15:00",
      "notes": "leaving for lunch",
      "recurring_block_out_time": {
        "id": null,
        "time_period": null,
        "interval": 0,
        "rec_start_date": "0001-01-01T00:00:00",
        "rec_end_date": null,
        "week_days": 0,
        "occurences": null
      }
    },
    {
      "block_out_time_id": "953cd9b6-14f1-480c-a584-a2e3cd5a82ef",
      "employee": null,
      "room": {
        "id": "699ec863-c155-4c4b-bf58-5310a7d1df1c",
        "name": "15% Premium Room"
      },
      "block_out_time_type": {
        "id": 103,
        "name": "modelling",
        "duration": 15
      },
      "start_time": "2018-10-09T11:45:00",
      "end_time": "2018-10-09T11:45:00",
      "start_time_in_center": "2018-10-09T17:15:00",
      "end_time_in_center": "2018-10-09T17:15:00",
      "notes": "leaving for lunch",
      "recurring_block_out_time": {
        "id": null,
        "time_period": null,
        "interval": 0,
        "rec_start_date": "0001-01-01T00:00:00",
        "rec_end_date": null,
        "week_days": 0,
        "occurences": null
      }
    },
    {
      "block_out_time_id": "001baac2-5472-464f-9c71-6d7cbed60f7d",
      "employee": null,
      "room": {
        "id": "699ec863-c155-4c4b-bf58-5310a7d1df1c",
        "name": "15% Premium Room"
      },
      "block_out_time_type": {
        "id": 103,
        "name": "modelling",
        "duration": 15
      },
      "start_time": "2018-10-09T11:45:00",
      "end_time": "2018-10-09T11:45:00",
      "start_time_in_center": "2018-10-09T17:15:00",
      "end_time_in_center": "2018-10-09T17:15:00",
      "notes": "",
      "recurring_block_out_time": {
        "id": null,
        "time_period": null,
        "interval": 0,
        "rec_start_date": "0001-01-01T00:00:00",
        "rec_end_date": null,
        "week_days": 0,
        "occurences": null
      }
    },
    {
      "block_out_time_id": "f67f7e1a-82de-4f85-bfc5-d4bd82102b39",
      "employee": null,
      "room": {
        "id": "699ec863-c155-4c4b-bf58-5310a7d1df1c",
        "name": "15% Premium Room"
      },
      "block_out_time_type": {
        "id": 103,
        "name": "modelling",
        "duration": 15
      },
      "start_time": "2018-10-09T11:45:00",
      "end_time": "2018-10-09T12:05:00",
      "start_time_in_center": "2018-10-09T17:15:00",
      "end_time_in_center": "2018-10-09T17:35:00",
      "notes": "",
      "recurring_block_out_time": {
        "id": null,
        "time_period": null,
        "interval": 0,
        "rec_start_date": "0001-01-01T00:00:00",
        "rec_end_date": null,
        "week_days": 0,
        "occurences": null
      }
    },
    {
      "block_out_time_id": "70a2199a-81b5-429a-869a-35f38dfa1354",
      "employee": null,
      "room": {
        "id": "699ec863-c155-4c4b-bf58-5310a7d1df1c",
        "name": "15% Premium Room"
      },
      "block_out_time_type": {
        "id": 103,
        "name": "modelling",
        "duration": 15
      },
      "start_time": "2018-10-09T12:10:00",
      "end_time": "2018-10-09T12:29:00",
      "start_time_in_center": "2018-10-09T17:40:00",
      "end_time_in_center": "2018-10-09T17:59:00",
      "notes": "simon",
      "recurring_block_out_time": {
        "id": "1ef50900-bdcb-419e-af45-bc508aeea6ef",
        "time_period": "Daily",
        "interval": 1,
        "rec_start_date": "2018-10-09T00:00:00",
        "rec_end_date": null,
        "week_days": 0,
        "occurences": 3
      }
    },
    {
      "block_out_time_id": "da79b45d-6ea9-4a74-8026-741526c77085",
      "employee": null,
      "room": {
        "id": "699ec863-c155-4c4b-bf58-5310a7d1df1c",
        "name": "15% Premium Room"
      },
      "block_out_time_type": {
        "id": 103,
        "name": "modelling",
        "duration": 15
      },
      "start_time": "2018-10-10T12:10:00",
      "end_time": "2018-10-10T12:29:00",
      "start_time_in_center": "2018-10-10T17:40:00",
      "end_time_in_center": "2018-10-10T17:59:00",
      "notes": "simon",
      "recurring_block_out_time": {
        "id": "1ef50900-bdcb-419e-af45-bc508aeea6ef",
        "time_period": "Daily",
        "interval": 1,
        "rec_start_date": "2018-10-09T00:00:00",
        "rec_end_date": null,
        "week_days": 0,
        "occurences": 3
      }
    },
    {
      "block_out_time_id": "833e72de-c4b2-4c7a-8056-1fb99264de06",
      "employee": null,
      "room": {
        "id": "699ec863-c155-4c4b-bf58-5310a7d1df1c",
        "name": "15% Premium Room"
      },
      "block_out_time_type": {
        "id": 103,
        "name": "modelling",
        "duration": 15
      },
      "start_time": "2018-10-11T12:10:00",
      "end_time": "2018-10-11T12:29:00",
      "start_time_in_center": "2018-10-11T17:40:00",
      "end_time_in_center": "2018-10-11T17:59:00",
      "notes": "simon",
      "recurring_block_out_time": {
        "id": "1ef50900-bdcb-419e-af45-bc508aeea6ef",
        "time_period": "Daily",
        "interval": 1,
        "rec_start_date": "2018-10-09T00:00:00",
        "rec_end_date": null,
        "week_days": 0,
        "occurences": 3
      }
    }
  ];

  res.send(room);
});
module.exports = router;
