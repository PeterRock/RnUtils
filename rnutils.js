
/**
 * index file
 */
import React from 'react';
import {
  NativeModules,
} from 'react-native';

const RCTUtilsManager = NativeModules.Utils;

const RnUtils = {
  /*
   添加千分位分隔符
  */
  milliFormat: function(input){
    const DIGIT_PATTERN = /(^|\s)\d+(?=\.?\d*($|\s))/g;
    const MILLI_PATTERN = /(?=(?!\b)(\d{3})+$)/g;

    return input && input.toString()
      .replace(DIGIT_PATTERN, (m) => m.replace(MILLI_PATTERN, ','));
  },
  isOnCall: function (callback) {
    RCTUtilsManager.isOnCall(function (response) {
      if (callback) {
        callback(response === "yes")
      }
    })
  }
};

module.exports = RnUtils;