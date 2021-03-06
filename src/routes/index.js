var generalRoutes = require("./general");
var masterRoutes = require("./master");
var productionRoutes = require("./production");
var inventoryRoutes = require("./inventory");
var publicRoutes = require("./public");
var purchasingRoutes = require("./purchasing");
var reportRoutes = require("./report");
var authRoutes = require("./auth");
var salesRoutes = require("./sales");
var garmentPurchasingRoutes = require("./garment-purchasing");
var garmentMasterPlanRoutes = require("./garment-master-plan");
var migrationLog = require("./migration-log");
var garmentMasterPlanRoutes = require("./garment-master-plan");
var spMasterPlanRoutes = require("./sp-master-plan");
var spinningRoutes = require("./spinning-production");
var intPurchasingRoutes = require("./int-purchasing");
var customsReportRoutes = require("./customs-report");
let expeditionRoutes = require('./expedition');
let merchandiserRoutes = require('./merchandiser');

export default [].concat(publicRoutes, generalRoutes, spMasterPlanRoutes, masterRoutes, productionRoutes, spinningRoutes, purchasingRoutes, salesRoutes, inventoryRoutes, garmentPurchasingRoutes, garmentMasterPlanRoutes, intPurchasingRoutes, customsReportRoutes, authRoutes, expeditionRoutes,merchandiserRoutes, migrationLog, reportRoutes);



