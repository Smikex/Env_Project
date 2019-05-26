$(document).ready(function () {
  // raddio tabs
  $("input[name$='radioStep'], input[name$='newDirection'], input[name$='type']").click(function () {
    var test = $(this).val();
    $(this).parents('form').find("div.desc").hide();
    $(".radio" + test).show();
  });

  // Material Select Initialization

  $('.mdb-select').materialSelect();

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  // SideNav Button Initialization
  $(".button-collapse").sideNav({
    breakpoint: 1200
  });

  // SideNav Scrollbar Initialization
  var sideNavScrollbar = document.querySelector('.custom-scrollbar');
  var ps = new PerfectScrollbar(sideNavScrollbar);



  // Add reference ВРЕМЕННО
  var k=1;
  $('.open_ref').click(function(e){
    e.preventDefault();
  $('#ref'+k).removeClass('d-none');
  k++;
 
  });
  
  $('[data-id=1]').click(function(e){
    e.preventDefault();
  $('#ref3').removeClass('d-none');
  });

  // remove Reference

  $('.trash-button.remove').click(function(e){
    e.preventDefault();
$(this).parent().parent().addClass('d-none');
  });


  // Select2 

  function format(item, state) {
    if (!item.id) {
      return item.text;
    }
    var img = $("<span>", {
      class: "flag-"+ item.element.value,
      width: 20,

    });
    var span = $("<span>", {
      text: " " + item.text
    });
    span.prepend(img);
    return span;
  }

  function formatr(item, state) {
    if (!item.id) {
      return item.text;
    }
    var countryUrl = "img/flag/4x3/";
    var url = countryUrl;
    var img = $("<img>", {
      class: "img-flag",
      width: 20,
      src: url + item.element.value.toLowerCase() + ".svg"
    });
    var span = $("<span>", {
      text: " "
    });
    span.prepend(img);
    return span;
  }
  var data = [{
      id: 'AF',
      text: 'Afghanistan'
    },
    {
      id: 'AX',
      text: 'Aland Islands'
    },
    {
      id: 'AL',
      text: 'Albania'
    },
    {
      id: 'DZ',
      text: 'Algeria'
    },
    {
      id: 'AS',
      text: 'American Samoa'
    },
    {
      id: 'AD',
      text: 'Andorra'
    },
    {
      id: 'AO',
      text: 'Angola'
    },
    {
      id: 'AI',
      text: 'Anguilla'
    },
    {
      id: 'AQ',
      text: 'Antarctica'
    },
    {
      id: 'AG',
      text: 'Antigua And Barbuda'
    },
    {
      id: 'AR',
      text: 'Argentina'
    },
    {
      id: 'AM',
      text: 'Armenia'
    },
    {
      id: 'AW',
      text: 'Aruba'
    },
    {
      id: 'AU',
      text: 'Australia'
    },
    {
      id: 'AT',
      text: 'Austria'
    },
    {
      id: 'AZ',
      text: 'Azerbaijan'
    },
    {
      id: 'BS',
      text: 'Bahamas'
    },
    {
      id: 'BH',
      text: 'Bahrain'
    },
    {
      id: 'BD',
      text: 'Bangladesh'
    },
    {
      id: 'BB',
      text: 'Barbados'
    },
    {
      id: 'BY',
      text: 'Belarus'
    },
    {
      id: 'BE',
      text: 'Belgium'
    },
    {
      id: 'BZ',
      text: 'Belize'
    },
    {
      id: 'BJ',
      text: 'Benin'
    },
    {
      id: 'BM',
      text: 'Bermuda'
    },
    {
      id: 'BT',
      text: 'Bhutan'
    },
    {
      id: 'BO',
      text: 'Bolivia'
    },
    {
      id: 'BA',
      text: 'Bosnia And Herzegovina'
    },
    {
      id: 'BW',
      text: 'Botswana'
    },
    {
      id: 'BV',
      text: 'Bouvet Island'
    },
    {
      id: 'BR',
      text: 'Brazil'
    },
    {
      id: 'IO',
      text: 'British Indian Ocean Territory'
    },
    {
      id: 'BN',
      text: 'Brunei Darussalam'
    },
    {
      id: 'BG',
      text: 'Bulgaria'
    },
    {
      id: 'BF',
      text: 'Burkina Faso'
    },
    {
      id: 'BI',
      text: 'Burundi'
    },
    {
      id: 'KH',
      text: 'Cambodia'
    },
    {
      id: 'CM',
      text: 'Cameroon'
    },
    {
      id: 'CA',
      text: 'Canada'
    },
    {
      id: 'CV',
      text: 'Cape Verde'
    },
    {
      id: 'KY',
      text: 'Cayman Islands'
    },
    {
      id: 'CF',
      text: 'Central African Republic'
    },
    {
      id: 'TD',
      text: 'Chad'
    },
    {
      id: 'CL',
      text: 'Chile'
    },
    {
      id: 'CN',
      text: 'China'
    },
    {
      id: 'CX',
      text: 'Christmas Island'
    },
    {
      id: 'CC',
      text: 'Cocos Islands'
    },
    {
      id: 'CO',
      text: 'Colombia'
    },
    {
      id: 'KM',
      text: 'Comoros'
    },
    {
      id: 'CG',
      text: 'Congo'
    },
    {
      id: 'CK',
      text: 'Cook Islands'
    },
    {
      id: 'CR',
      text: 'Costa Rica'
    },
    {
      id: 'CI',
      text: 'Cote DIvoire'
    },
    {
      id: 'HR',
      text: 'Croatia'
    },
    {
      id: 'CU',
      text: 'Cuba'
    },
    {
      id: 'CY',
      text: 'Cyprus'
    },
    {
      id: 'CZ',
      text: 'Czech Republic'
    },
    {
      id: 'DK',
      text: 'Denmark'
    },
    {
      id: 'DJ',
      text: 'Djibouti'
    },
    {
      id: 'DM',
      text: 'Dominica'
    },
    {
      id: 'DO',
      text: 'Dominican Republic'
    },
    {
      id: 'EC',
      text: 'Ecuador'
    },
    {
      id: 'EG',
      text: 'Egypt'
    },
    {
      id: 'SV',
      text: 'El Salvador'
    },
    {
      id: 'GQ',
      text: 'Equatorial Guinea'
    },
    {
      id: 'ER',
      text: 'Eritrea'
    },
    {
      id: 'EE',
      text: 'Estonia'
    },
    {
      id: 'ET',
      text: 'Ethiopia'
    },
    {
      id: 'FK',
      text: 'Falkland Islands'
    },
    {
      id: 'FO',
      text: 'Faroe Islands'
    },
    {
      id: 'FJ',
      text: 'Fiji'
    },
    {
      id: 'FI',
      text: 'Finland'
    },
    {
      id: 'FR',
      text: 'France'
    },
    {
      id: 'GF',
      text: 'French Guiana'
    },
    {
      id: 'PF',
      text: 'French Polynesia'
    },
    {
      id: 'TF',
      text: 'French Southern Territories'
    },
    {
      id: 'GA',
      text: 'Gabon'
    },
    {
      id: 'GM',
      text: 'Gambia'
    },
    {
      id: 'GE',
      text: 'Georgia'
    },
    {
      id: 'DE',
      text: 'Germany'
    },
    {
      id: 'GH',
      text: 'Ghana'
    },
    {
      id: 'GI',
      text: 'Gibraltar'
    },
    {
      id: 'GR',
      text: 'Greece'
    },
    {
      id: 'GL',
      text: 'Greenland'
    },
    {
      id: 'GD',
      text: 'Grenada'
    },
    {
      id: 'GP',
      text: 'Guadeloupe'
    },
    {
      id: 'GU',
      text: 'Guam'
    },
    {
      id: 'GT',
      text: 'Guatemala'
    },
    {
      id: 'GG',
      text: 'Guernsey'
    },
    {
      id: 'GN',
      text: 'Guinea'
    },
    {
      id: 'GW',
      text: 'Guinea-Bissau'
    },
    {
      id: 'GY',
      text: 'Guyana'
    },
    {
      id: 'HT',
      text: 'Haiti'
    },
    {
      id: 'VA',
      text: 'Vatican City State'
    },
    {
      id: 'HN',
      text: 'Honduras'
    },
    {
      id: 'HK',
      text: 'Hong Kong'
    },
    {
      id: 'HU',
      text: 'Hungary'
    },
    {
      id: 'IS',
      text: 'Iceland'
    },
    {
      id: 'IN',
      text: 'India'
    },
    {
      id: 'ID',
      text: 'Indonesia'
    },
    {
      id: 'IR',
      text: 'Iran, Islamic Republic Of'
    },
    {
      id: 'IQ',
      text: 'Iraq'
    },
    {
      id: 'IE',
      text: 'Ireland'
    },
    {
      id: 'IM',
      text: 'Isle Of Man'
    },
    {
      id: 'IL',
      text: 'Israel'
    },
    {
      id: 'IT',
      text: 'Italy'
    },
    {
      id: 'JM',
      text: 'Jamaica'
    },
    {
      id: 'JP',
      text: 'Japan'
    },
    {
      id: 'JE',
      text: 'Jersey'
    },
    {
      id: 'JO',
      text: 'Jordan'
    },
    {
      id: 'KZ',
      text: 'Kazakhstan'
    },
    {
      id: 'KE',
      text: 'Kenya'
    },
    {
      id: 'KI',
      text: 'Kiribati'
    },
    {
      id: 'KR',
      text: 'Korea'
    },
    {
      id: 'KW',
      text: 'Kuwait'
    },
    {
      id: 'KG',
      text: 'Kyrgyzstan'
    },
    {
      id: 'LA',
      text: 'Lao Peoples Democratic Republic'
    },
    {
      id: 'LV',
      text: 'Latvia'
    },
    {
      id: 'LB',
      text: 'Lebanon'
    },
    {
      id: 'LS',
      text: 'Lesotho'
    },
    {
      id: 'LR',
      text: 'Liberia'
    },
    {
      id: 'LY',
      text: 'Libyan Arab Jamahiriya'
    },
    {
      id: 'LI',
      text: 'Liechtenstein'
    },
    {
      id: 'LT',
      text: 'Lithuania'
    },
    {
      id: 'LU',
      text: 'Luxembourg'
    },
    {
      id: 'MO',
      text: 'Macao'
    },
    {
      id: 'MK',
      text: 'Macedonia'
    },
    {
      id: 'MG',
      text: 'Madagascar'
    },
    {
      id: 'MW',
      text: 'Malawi'
    },
    {
      id: 'MY',
      text: 'Malaysia'
    },
    {
      id: 'MV',
      text: 'Maldives'
    },
    {
      id: 'ML',
      text: 'Mali'
    },
    {
      id: 'MT',
      text: 'Malta'
    },
    {
      id: 'MH',
      text: 'Marshall Islands'
    },
    {
      id: 'MQ',
      text: 'Martinique'
    },
    {
      id: 'MR',
      text: 'Mauritania'
    },
    {
      id: 'MU',
      text: 'Mauritius'
    },
    {
      id: 'YT',
      text: 'Mayotte'
    },
    {
      id: 'MX',
      text: 'Mexico',
      selected: 'selected'
    },
    {
      id: 'FM',
      text: 'Micronesia'
    },
    {
      id: 'MD',
      text: 'Moldova'
    },
    {
      id: 'MC',
      text: 'Monaco'
    },
    {
      id: 'MN',
      text: 'Mongolia'
    },
    {
      id: 'ME',
      text: 'Montenegro'
    },
    {
      id: 'MS',
      text: 'Montserrat'
    },
    {
      id: 'MA',
      text: 'Morocco'
    },
    {
      id: 'MZ',
      text: 'Mozambique'
    },
    {
      id: 'MM',
      text: 'Myanmar'
    },
    {
      id: 'NA',
      text: 'Namibia'
    },
    {
      id: 'NR',
      text: 'Nauru'
    },
    {
      id: 'NP',
      text: 'Nepal'
    },
    {
      id: 'NL',
      text: 'Netherlands'
    },
    {
      id: 'NC',
      text: 'New Caledonia'
    },
    {
      id: 'NZ',
      text: 'New Zealand'
    },
    {
      id: 'NI',
      text: 'Nicaragua'
    },
    {
      id: 'NE',
      text: 'Niger'
    },
    {
      id: 'NG',
      text: 'Nigeria'
    },
    {
      id: 'NU',
      text: 'Niue'
    },
    {
      id: 'NF',
      text: 'Norfolk Island'
    },
    {
      id: 'MP',
      text: 'Northern Mariana Islands'
    },
    {
      id: 'NO',
      text: 'Norway'
    },
    {
      id: 'OM',
      text: 'Oman'
    },
    {
      id: 'PK',
      text: 'Pakistan'
    },
    {
      id: 'PW',
      text: 'Palau'
    },
    {
      id: 'PS',
      text: 'Palestinian Territory'
    },
    {
      id: 'PA',
      text: 'Panama'
    },
    {
      id: 'PG',
      text: 'Papua New Guinea'
    },
    {
      id: 'PY',
      text: 'Paraguay'
    },
    {
      id: 'PE',
      text: 'Peru'
    },
    {
      id: 'PH',
      text: 'Philippines'
    },
    {
      id: 'PN',
      text: 'Pitcairn'
    },
    {
      id: 'PL',
      text: 'Poland'
    },
    {
      id: 'PT',
      text: 'Portugal'
    },
    {
      id: 'PR',
      text: 'Puerto Rico'
    },
    {
      id: 'QA',
      text: 'Qatar'
    },
    {
      id: 'RE',
      text: 'Reunion'
    },
    {
      id: 'RO',
      text: 'Romania'
    },
    {
      id: 'RU',
      text: 'Russian Federation'
    },
    {
      id: 'RW',
      text: 'Rwanda'
    },
    {
      id: 'BL',
      text: 'Saint Barthelemy'
    },
    {
      id: 'SH',
      text: 'Saint Helena'
    },
    {
      id: 'KN',
      text: 'Saint Kitts And Nevis'
    },
    {
      id: 'LC',
      text: 'Saint Lucia'
    },
    {
      id: 'MF',
      text: 'Saint Martin'
    },
    {
      id: 'PM',
      text: 'Saint Pierre And Miquelon'
    },
    {
      id: 'VC',
      text: 'Saint Vincent And Grenadines'
    },
    {
      id: 'WS',
      text: 'Samoa'
    },
    {
      id: 'SM',
      text: 'San Marino'
    },
    {
      id: 'ST',
      text: 'Sao Tome And Principe'
    },
    {
      id: 'SA',
      text: 'Saudi Arabia'
    },
    {
      id: 'SN',
      text: 'Senegal'
    },
    {
      id: 'RS',
      text: 'Serbia'
    },
    {
      id: 'SC',
      text: 'Seychelles'
    },
    {
      id: 'SL',
      text: 'Sierra Leone'
    },
    {
      id: 'SG',
      text: 'Singapore'
    },
    {
      id: 'SK',
      text: 'Slovakia'
    },
    {
      id: 'SI',
      text: 'Slovenia'
    },
    {
      id: 'SB',
      text: 'Solomon Islands'
    },
    {
      id: 'SO',
      text: 'Somalia'
    },
    {
      id: 'ZA',
      text: 'South Africa'
    },
    {
      id: 'GS',
      text: 'South Georgia And Sandwich Isl'
    },
    {
      id: 'ES',
      text: 'Spain'
    },
    {
      id: 'LK',
      text: 'Sri Lanka'
    },
    {
      id: 'SD',
      text: 'Sudan'
    },
    {
      id: 'SR',
      text: 'Suriname'
    },
    {
      id: 'SJ',
      text: 'Svalbard And Jan Mayen'
    },
    {
      id: 'SZ',
      text: 'Swaziland'
    },
    {
      id: 'SE',
      text: 'Sweden'
    },
    {
      id: 'CH',
      text: 'Switzerland'
    },
    {
      id: 'SY',
      text: 'Syrian Arab Republic'
    },
    {
      id: 'TW',
      text: 'Taiwan'
    },
    {
      id: 'TJ',
      text: 'Tajikistan'
    },
    {
      id: 'TZ',
      text: 'Tanzania'
    },
    {
      id: 'TH',
      text: 'Thailand'
    },
    {
      id: 'TL',
      text: 'Timor-Leste'
    },
    {
      id: 'TG',
      text: 'Togo'
    },
    {
      id: 'TK',
      text: 'Tokelau'
    },
    {
      id: 'TO',
      text: 'Tonga'
    },
    {
      id: 'TT',
      text: 'Trinidad And Tobago'
    },
    {
      id: 'TN',
      text: 'Tunisia'
    },
    {
      id: 'TR',
      text: 'Turkey'
    },
    {
      id: 'TM',
      text: 'Turkmenistan'
    },
    {
      id: 'TC',
      text: 'Turks And Caicos Islands'
    },
    {
      id: 'TV',
      text: 'Tuvalu'
    },
    {
      id: 'UG',
      text: 'Uganda'
    },
    {
      id: 'UA',
      text: 'Ukraine'
    },
    {
      id: 'AE',
      text: 'United Arab Emirates'
    },
    {
      id: 'GB',
      text: 'United Kingdom'
    },
    {
      id: 'US',
      text: 'United States'
    },
    {
      id: 'UM',
      text: 'United States Outlying Islands'
    },
    {
      id: 'UY',
      text: 'Uruguay'
    },
    {
      id: 'UZ',
      text: 'Uzbekistan'
    },
    {
      id: 'VU',
      text: 'Vanuatu'
    },
    {
      id: 'VE',
      text: 'Venezuela'
    },
    {
      id: 'VN',
      text: 'Viet Nam'
    },
    {
      id: 'VG',
      text: 'Virgin Islands'
    },
    {
      id: 'WF',
      text: 'Wallis And Futuna'
    },
    {
      id: 'EH',
      text: 'Western Sahara'
    },
    {
      id: 'YE',
      text: 'Yemen'
    },
    {
      id: 'ZM',
      text: 'Zambia'
    },
    {
      id: 'ZW',
      text: 'Zimbabwe'
    }
  ];

  $(".origin_country, .dest_country, .search_country, .dest_search_country").select2({
    data: data,
    templateResult: function (item) {
      return format(item, false);
    },
    templateSelection: function (item) {
      return formatr(item, false);
    }
  })

  // datepicker

  $('.datepicker').pickadate();

  // checkbox

  $('#pickup_checkbox').on('change', function () {
    $(".pickup_block").toggleClass("d-none")
  });
  $('#invoice_checkbox').on('change', function () {
    $(".invoice_block").toggleClass("d-none")
  });

  $('#asap').on('change', function () {
if ($(this).prop("checked")){
  $(".shedule_block").addClass("d-none");
}
  })
  $('#shedule_time').on('change', function () {
    if ($(this).prop("checked")){
      $(".shedule_block").removeClass("d-none");
    }
    });
    $('#pickup_diff_dir').on('change', function () {
        $(".pickup_different").toggleClass("d-none")
      });

  // range slider

      $(function() {
        var e = new Date,
            t = e.getHours(),
            a = e.getMinutes();
        if ($("#slider-range").slider({
                range: !0,
                min: 1e3,
                max: 2e3,
                values: [100 * t + a / .6, 2e3],
                animate: !0
            }), 1 == a.toString().length) var n = "0" + a;
        else var n = a;
        var i = t + ":" + n;
        $("#slider-range").slider("values", 0);
        t >= 20 && a > 0 ? $("#schedule_from").val("20:00") : $("#schedule_from").val(i), $("#schedule_to").val("20:00"), $("#slider-range").slider({
            slide: function(e, t) {
                var a = Math.floor(t.values[0] / 100),
                    n = Math.floor(t.values[1] / 100),
                    i = Math.floor(t.values[0] / 100 % 1 * 60),
                    o = Math.floor(t.values[1] / 100 % 1 * 60);
                1 == i.toString().length && (i = "0" + i), 1 == o.toString().length && (o = "0" + o), $("#schedule_from").val(a + ":" + i), $("#schedule_to").val(n + ":" + o)
            }
        }), $(".range, .range-alert").on("mousedown", function(e) {
            e.stopPropagation()
        }), $("#schedule_from").keyup(function(e) {
            /^([0-9][0-9])|[01][0-9]$/.test(e.target.value) && -1 == e.target.value.indexOf(":") && (e.target.value += ":")
        }), $("#schedule_from").keydown(function(e) {
            return (parseInt(e.key) >= 0 || "Backspace" == e.key || "Delete" == e.key || "Tab" == e.key) && !(3 == e.target.value.length && parseInt(e.key) >= 6)
        }), $("#schedule_to").keyup(function(e) {
            /^([0-9][0-9])|[01][0-9]$/.test(e.target.value) && -1 == e.target.value.indexOf(":") && (e.target.value += ":")
        }), $("#schedule_to").keydown(function(e) {
            return (parseInt(e.key) >= 0 || "Backspace" == e.key || "Delete" == e.key || "Tab" == e.key) && !(3 == e.target.value.length && parseInt(e.key) >= 6)
        }), $("#schedule_from").change(function() {
            var e = this.value.substring(0),
                t = $("#slider-range").slider("values")[1],
                a = 100 * e.split(/:/)[0];
            if (e.split(/:/)[1] > 60) var n = 98;
            else var n = Math.floor(e.split(/:/)[1] / .6);
            var i = Math.floor(a + n);
            if (i > t) {
                i = t;
                var a = Math.floor(i / 100),
                    n = Math.floor(i / 100 % 1 * 60);
                1 == n.toString().length && (n = "0" + n), $("#schedule_from").val(a + ":" + n)
            }
            $("#slider-range").slider({
                values: [i, t]
            })
        }), $("#schedule_to").change(function() {
            var e = $("#slider-range").slider("values")[0],
                t = this.value.substring(0),
                a = 100 * t.split(/:/)[0];
            if (t.split(/:/)[1] > 60) var n = 98;
            else var n = Math.floor(t.split(/:/)[1] / .6);
            var i = a + n;
            if (i < e) {
                i = e;
                var a = Math.floor(i / 100),
                    n = Math.floor(i / 100 % 1 * 60);
                1 == n.toString().length && (n = "0" + n), $("#schedule_to").val(a + ":" + n)
            } else i > 2e3 && $("#schedule_to").val("20:00");
            $("#slider-range").slider({
                values: [e, i]
            })
        })
    });

    // Price slider

    $( function() {
      $( "#price-slider" ).slider({
        range: true,
        min: 0,
        max: 500,
        values: [ 10, 300 ],
        slide: function( event, ui ) {
          $( "#price_from" ).val( "$MX" + ui.values[ 0 ] );
          $( "#price_to" ).val( "$MX" + ui.values[ 1 ] );
        }
      });
    
       
    } );


});