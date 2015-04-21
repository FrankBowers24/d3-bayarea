var d3;
var LabeledPie;
var window;
var ZipCodeMap;
var annyang;

(function () {

  var pieConfig = {
    svgWidth: 450,
    svgHeight: 190,
    pieRadius: 80,
    outerRadiusFactor: 0.8,
    innerRadiusFactor: 0.4,
    outerArcFactor: 0.85, // for break in label lines
    minimumDisplayedPercentage: 6,
    minimumDisplayedLabel: 3
  };

  var incomePie = new LabeledPie(".tip-info", pieConfig);

  var statLabels = {
    //stat: ["Income", "Race/Ethnicity", "Place of Birth", "Age", "Housing"],
    race: ["All", "Latino", "White", "African American", "Native American", "Asian",
      "Pacific Islander", "Other Race", "Mixed Race"
    ],
    asian: ["All", "Asian Indian", "Bangladeshi", "Cambodian", "Mainland Chinese", "Filipino", "Hmong",
      "Japanese", "Korean", "Laotian", "Pakistani", "Taiwanese", "Thai", "Vietnamese"
    ],
    birth: ["All", "California", "USA, not California", "Foreign"],
    foreign: ["All", "Europe", "Asia", "Africa", "Oceania", "Latin America", "Canada"],
    age: ["All", "Under 18", "18 to 24", "25 to 34", "35 to 44", "45 to 64", "65 and over"],
    housing: ["", "Single Family Homes", "Condominiums", "Apartments", "Owner-Occupied", "Housing Types"],
    ownRent: ["All", "Owner-Occupied", "Renter-Occupied"],
    housingUnits: ["All", "1-Unit Detached", "1-Unit Attached", "2 Units", "3 to 4 Units", "5 to 9 Units",
      "10 to 19 Units", "20 or more Units", "Mobile Home", "Boat, RV, Van, etc."
    ],
    rent: ["All", "Studio", "One Bedroom", "Two Bedroom", "Three Bedroom"]
  };

  var pieLabelConfig = {
    income: {
      labels: ["< $25K", "$25K - $50K", "$50K - $75K", "$75K - $100K", "$100K - $200K", "> $200K"],
      domain: [0, 1, 2, 3, 4, 5],
      range: ["#a50026", "#f46d43", "#fee08b", "#d9ef8b", "#66bd63", "#006837"]
    },
    race: {
      labels: statLabels.race.slice(1),
      domain: [0, 1, 2, 3, 4, 5, 6, 7],
      range: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"]
    },
    asian: {
      labels: statLabels.asian.slice(1),
      domain: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      range: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928", "#cccccc"]
    },
    birth: {
      labels: statLabels.birth.slice(1),
      domain: [0, 1, 2],
      range: ["#1b9e77", "#d95f02", "#7570b3"]
    },
    foreign: {
      labels: statLabels.foreign.slice(1),
      domain: [1, 2, 3, 4, 5, 6],
      range: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d"]
    },
    age: {
      labels: statLabels.age.slice(1),
      domain: [0, 1, 2, 3, 4, 5],
      range: ["#a50026", "#f46d43", "#fee08b", "#d9ef8b", "#66bd63", "#006837"]
    },
    ownRent: {
      labels: statLabels.ownRent.slice(1),
      domain: [0, 1],
      range: ["#66bd63", "#006837"]
    },
    housingUnits: {
      labels: statLabels.housingUnits.slice(1),
      domain: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      range: ["#d73027", "#f46d43", "#fdae61", "#fee08b", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"]
    }
  };

  var setPieLabels = function (labelConfig, key) {
    // reset income pie
    d3.select(".tip-info").select("svg").remove();
    incomePie = new LabeledPie(".tip-info", pieConfig);

    var color = d3.scale.ordinal()
      .domain(labelConfig[key].domain)
      .range(labelConfig[key].range);

    incomePie.setLabels(labelConfig[key].labels);
    incomePie.setColorScale(color);
    d3.select(".tooltip-overlay").classed("hidden", true);
  };

  var setLegendDescription = function (statType, statIndex) {
    var mapLegends = {
      income: "Percentage of income tax returns with AGI greater than $200,000",
      race: "Percentage of # race/ethnicity",
      asian: "Percentage of Asians listed as #",
      birth: "Percentage of # Born",
      foreign: "Percentage of Foreign Born from #",
      age: "Percentage of population age #",
      sfr: "Median Price of Single Family Homes ($1,000,000's)",
      condo: "Median Price of Condominiums ($1,000,000's)",
      ownRent: "Percentage of Occupied Housing Units Which Are Owner-Occupied",
      housingUnits: "Percentage of # Housing",
      employment: "Unemployment Rate",
      rent: "Average Rental Rates for # Units"
    };

    var pieLegends = {
      income: "IRS Data: AGI reported on 2012 income tax returns",
      race: "2010 Census: Race/Ethnicity",
      asian: "2009-2013 ACS: National origin of Asians",
      birth: "2009-2013 ACS: Place of birth",
      foreign: "2009-2013 ACS:Regional origin of Foreign Born Population",
      age: "2009-2013 American Community Survey: Age",
      sfr: "Zillow: January, 2015",
      condo: "Zillow: January, 2015",
      ownRent: "2009-2013 ACS: Owner-Occupied Housing",
      housingUnits: "2009-2013 ACS: Housing Units in Structure",
      employment: "2009-2013 ACS: Unemployment Rate",
      rent: "MyApartmentMap.com: March, 2015"
    };

    var overlayDescription = {
      sfr: "Median Price of Single Family Homes",
      condo: "Median Price of Condominiums",
      rent: "Average Monthly Rent for # Apartments"
    };

    var description = mapLegends[statType];
    if (description.indexOf('#') >= 0) {
      description = description.replace('#', statLabels[statType][statIndex]);
    }
    d3.select(".legend-description").text(description);
    d3.select(".tip-description").text(pieLegends[statType]);
    if (statType in overlayDescription) {
      description = overlayDescription[statType];
      if (description.indexOf('#') >= 0) {
        description = description.replace('#', statLabels[statType][statIndex]);
      }
      d3.select(".tooltip-overlay-label").text(description);
    }
  };

  var getMenuId = function (name) {
    name = name.replace(/[A-Z]/g, function (c) {
      return '-' + c.toLowerCase();
    });
    return '#' + name + '-list';
  };

  var createComboBoxes = function () {
    var fullListNames = ['foreign', 'asian'];
    var menuNames = Object.keys(statLabels);
    menuNames.forEach(function (name) {
      var omitFirst = fullListNames.indexOf(name) === -1;
      var menu = d3.select(getMenuId(name)).selectAll('option')
        .data(statLabels[name].slice(omitFirst ? 1 : 0));
      menu.enter().append('option')
        .attr('value', function (d, i) {
          return omitFirst ? i + 1 : i;
        })
        .text(function (d) {
          return d;
        });
    });
  };

  createComboBoxes();

  var createLegend = function (colors, statType, statIndex) {
    var formats = {
      percent: d3.format('%'),
      percentPointOne: d3.format('2.1%'),
      price: d3.format('1.1')
    };

    d3.select("#legend ul").remove();
    var legend = d3.select('#legend')
      .append('ul')
      .attr('class', 'list-inline');

    var keys = legend.selectAll('li.key')
      .data(colors.range());

    // do we need more precision?
    var endRange = colors.range()[colors.range().length - 1];
    var maxDomain = colors.invertExtent(endRange);
    var needMorePrecision = maxDomain[0] < 0.1;

    keys.enter().append('li')
      .attr('class', 'key')
      .style('border-top-color', String)
      .text(function (d) {
        var r = colors.invertExtent(d);
        var str;
        if (statType === "rent") {
          str = r[0].toFixed(0);
        } else if (statType === "sfr" || statType === "condo") {
          str = (r[0] / 1000000).toFixed(2);
        } else {
          str = needMorePrecision ?
            formats.percentPointOne(r[0]) : formats.percent(r[0]);
        }
        return str;
      });
    setLegendDescription(statType, statIndex);
  };

  var showDetails = function (value, values, valueObject, selCount, d, fieldValue) {
    title = (selCount > 1) ? fieldValue : getTitle(d); // set the title
    d3.select(".tip-location").text(title);
    d3.select(".tip-description").classed("hidden", false);
    if (valueObject.singleValue) {
      d3.select(".tooltip-overlay").classed("hidden", false);
      value = value ? "$" + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : value;
      d3.select(".tooltip-overlay-text").text(value || "No Data");
    } else if (values[0] > 0) {
      d3.select(".tip-info").classed("hidden", false);
      incomePie.change(values.slice(1));
    } else {
      d3.select(".tip-info").classed("hidden", true);
    }
  };

  var getTitle = function (d) {
    return d.properties.GEOID10 + ": " + d.properties.city;
  };
  
  var deselectMap = function() {
    d3.select(".tip-info").classed("hidden", true);
    d3.select(".tip-description").classed("hidden", true);
    d3.select(".tip-location").text('');
    d3.select(".tooltip-overlay").classed("hidden", true);
  };

  var ratioValueObject = {
    getValue: function (values, statIndex) {
      return +values[statIndex] / +values[0];
    },
    singleValue: false,
  };

  var singleValueObject = {
    getValue: function (values) {
      return +values[0];
    },
    singleValue: true,
  };

  var multiValueObject = {
    getValue: function (values, statIndex) {
      return +values[statIndex];
    },
    singleValue: true,
  }

  var zipCodeMapConfig = {
    width: 650,
    height: 1000,
    minZoom: 0.6 * (1 << 16),
    maxZoom: 0.7 * (1 << 17),
    range: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"],
    statIndex: 6,
    statType: "income",
    valueObject: ratioValueObject,
    center: "94111",
    pathKey: "Bay_Area",
    dataKey: "GEOID10",
    dataFilename: "data/allStats.json",
    geoFilename: "Bay_Area_Cities_topo.json"
  };

  var statMap = new ZipCodeMap(".right-side", zipCodeMapConfig, createLegend, getTitle, showDetails, deselectMap);
  setPieLabels(pieLabelConfig, "income");

  d3.timer(function () {
    statMap.selectByData("city", "San Jose");
    return true;
  }, 500);

  var getSelectionTitle = function () {
    var retVal = d3.select(".tip-location").text().split(':')[0];
    return retVal;
  };

  var selectByData = function (value) {
    var key = value.match(/[0-9]/) ? "GEOID10" : "city";
    statMap.selectByData(key, value);
  };

  d3.select("#zoom-out")
    .on("click", function () {
      window.event.stopPropagation();
      statMap.zoomOut();
    });

  var gotoVoiceCommand = function (place) {
    $('#select-input').val(place);
    selectByData(place);
  };

  var showMeVoiceCommand = function (stat) {
    var statIndex = 0;
    var housingIndex = -1;
    if (stat === "income") {
      statIndex = 0;
    } else if (stat === "race") {
      statIndex = 1;
    } else if (stat === "birth place") {
      statIndex = 2;
    } else if (stat === "ages") {
      statIndex = 3;
    } else if (stat === "homes") {
      statIndex = 4;
      housingIndex = 1;
    } else if (stat === "condos") {
      statIndex = 4;
      housingIndex = 2;
    } else if (stat === "housing types") {
      statIndex = 4;
      housingIndex = 4;
    } else {
      return;
    }
    $("#stat-list").val(statIndex);
    $("#stat-list").trigger("change");
    if (housingIndex !== -1) {
      $("#housing-list").val(housingIndex);
      $("#housing-list").trigger("change");
    }
  };

  var enableVoiceCommands = function () {
    var commands = {
      'go to *place': gotoVoiceCommand,
      'show me *stat': showMeVoiceCommand
    };
    if (annyang) {
      console.log(annyang);
      annyang.start();
      annyang.debug();
      annyang.addCommands(commands);
    }
  };

  //enableVoiceCommands();
  //

  var menuMap = {
    name: "stat",
    children: [{
      name: "income",
      statIndex: 6,
      noMenu: true
    }, {
      name: "race",
      children: [{
        name: "asian",
        index: 5
      }]
    }, {
      name: "birth",
      children: [{
        name: "foreign",
        index: 3
      }]
    }, {
      name: "age"
    }, {
      name: "housing",
      children: [{
        name: "rent",
        index: 3
      }, {
        name: "housingUnits",
        index: 5
      }],
      statTypes: ["", "sfr", "condo", "rent", "ownRent", "housingUnits"],
      statIndexes: [0, 0, 0, 0, 1, 0],
      valueObjects: [ratioValueObject, singleValueObject, singleValueObject, multiValueObject, ratioValueObject, ratioValueObject],
      pieLabels: ["", "ownRent", "ownRent", "ownRent", "ownRent", "housingUnits"]
    }]
  };


  var getAllMenuNames = function () {
    var result = [];
    var menu;
    var subMenu;
    var i;
    var children = menuMap.children;
    result.push(menuMap.name);
    for (i = 0; i < children.length; i++) {
      menu = children[i];
      if (!(menu.noMenu)) {
        result.push(menu.name);
        if (menu.children) {
          for (var j = 0; j < menu.children.length; j++) {
            subMenu = menu.children[j];
            result.push(subMenu.name);
          }
        }
      }
    }
    return result;
  };

  var respondToMenus = function () {
    var configureMapAndPie = function (type, index, obj, labelId) {
      // statMap.setStatType(type);
      // statMap.setStatIndex(index);
      // statMap.setValueObject(code);
      statMap.changeData(type, index, obj);
      setPieLabels(pieLabelConfig, labelId);
    };
    var getSubMenuforLiveIndex = function (subMenuArray, liveIndex) {
      if (subMenuArray) {
        for (var k = 0; k < subMenuArray.length; k++) {
          if (subMenuArray[k].index === liveIndex) {
            return subMenuArray[k];
          }
        }
      }
      return null;
    };
    var statIndex = +d3.select(getMenuId(menuMap.name)).node().value;
    var children = menuMap.children;
    var menu;
    var liveIndex;
    var subMenu;
    var subMenuArray;
    var subMenuLiveIndex;
    var i;
    for (i = 0; i < children.length; i++) {
      menu = children[i];
      if (!(menu.noMenu)) {
        menu.liveIndex = d3.select(getMenuId(menu.name));
        menu.liveIndex.classed("hidden", statIndex !== i);
        if (menu.children) {
          subMenuArray = [];
          for (var j = 0; j < menu.children.length; j++) {
            subMenu = menu.children[j];
            subMenu.liveIndex = d3.select(getMenuId(subMenu.name));
            subMenu.liveIndex.classed("hidden", statIndex !== i ||
              +menu.liveIndex.node().value !== subMenu.index);
            subMenuArray.push(subMenu);
          }
        } else {
          subMenuArray = null;
        }
      }
      if (statIndex === i) {
        liveIndex = (menu && menu.liveIndex) ? +menu.liveIndex.node().value : menu.statIndex;
        subMenu = getSubMenuforLiveIndex(subMenuArray, liveIndex);
        if (subMenu && subMenu.index === liveIndex) {
          subMenuLiveIndex = +subMenu.liveIndex.node().value;
          if (subMenuLiveIndex === 0) {
            configureMapAndPie(
              menu.name,
              liveIndex,
              menu.valueObjects ? menu.valueObjects[liveIndex] : ratioValueObject,
              menu.name);
          } else {
            configureMapAndPie(
              menu.statTypes ? menu.statTypes[liveIndex] : subMenu.name,
              subMenuLiveIndex,
              menu.valueObjects ? menu.valueObjects[liveIndex] : ratioValueObject,
              menu.pieLabels ? menu.pieLabels[liveIndex] : subMenu.name);
          }
        } else {
          configureMapAndPie(
            menu.statTypes ? menu.statTypes[liveIndex] : menu.name,
            menu.statIndexes && menu.statIndexes[liveIndex] ? menu.statIndexes[liveIndex] : liveIndex,
            menu.valueObjects ? menu.valueObjects[liveIndex] : ratioValueObject,
            menu.pieLabels ? menu.pieLabels[liveIndex] : menu.name);
        }
        selectByData(getSelectionTitle());
        statMap.update();
      }
    }
  };

  var addMenuListeners = function () {
    getAllMenuNames().forEach(function (menuId) {
      $(getMenuId(menuId)).on("change", function () {
        respondToMenus();
      });
    });
  };

  addMenuListeners();

  d3.select("#select-button")
    .on("click", function () {
      window.event.stopPropagation();
      var value = d3.select("#select-input").node().value;
      var key = value.match(/[0-9]/) ? "GEOID10" : "city";
      statMap.selectByData(key, value);
    });

  $("#select-input")
    .on("propertychange", function () {
      window.event.stopPropagation();
      window.event.preventDefault();
      var value = d3.select("#select-input").node().value;
      var key = value.match(/[0-9]/) ? "GEOID10" : "city";
      statMap.selectByData(key, value);
      return false;
    });

  $("#select-input").bind('input propertychange', function (event) {
    event.stopPropagation();
    window.event.preventDefault();
    var value = d3.select("#select-input").node().value;
    var key = value.match(/[0-9]/) ? "GEOID10" : "city";
    statMap.selectByData(key, value);
    return false;
  });

  $("#select-input").on('val.changed', function (event) {
    event.stopPropagation();
    var value = d3.select("#select-input").node().value;
    var key = value.match(/[0-9]/) ? "GEOID10" : "city";
    statMap.selectByData(key, value);
  });

  $(document).ready(function () {
    $(window).keydown(function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        return false;
      }
    });
  });

  /*
  // hack to get auto-complete programmatic change to #select-input noticed
  (function ($) {
    var originalVal = $.fn.val;
    $.fn.val = function () {
      var result = originalVal.apply(this, arguments);
      if (arguments.length > 0) {
        $(this).trigger('val.changed');
      }
      return result;
    };
  })(jQuery);*/

  var getNames = function () {
    var result = [];
    statMap.forEach(function (data) {
      for (var key in data.properties) {
        if (data.properties.hasOwnProperty(key)) {
          result[data.properties[key]] = true;
        }
      }
    });
    return Object.keys(result);
  }

  $("#select-input").autoComplete({
    minChars: 1,
    source: function (term, suggest) {
      term = term.toLowerCase();
      var i;
      var choices = getNames();
      var matches = [];
      for (i = 0; i < choices.length; i++) {
        if (~choices[i].toLowerCase().indexOf(term)) {
          matches.push(choices[i]);
        }
      }
      suggest(matches);
    }
  });

}());