Ext.define('HRD.view.Home', {
	extend: 'Ext.TabPanel',
	xtype: 'homecard',
	config: {
		title: 'Home',
        iconCls: 'home',
        defaults: {
        	styleHtmlContent: true
        },
        items: [{
        	title: 'TabPanels',
        	scrollable: 'vertical',
        	html: '<p>The TabPanel provides a familiar tabbed</p>'
        },{
        	title: 'Toolbars',
        	scrollable: 'vertical',
        	html: '<p>Toolbars can be used as a title bar or as...</p>'
        }]
	}
});