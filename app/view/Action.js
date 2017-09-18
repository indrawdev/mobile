Ext.define('HRD.view.Action', {
	extend: 'Ext.Panel',
	xtype: 'actioncard',
	config: {
		title: 'Action',
		iconCls: 'action',
		html: 'placeholder text',
		styleHtmlContent: true,
		items: [{
			docked: 'top',
			xtype: 'toolbar',
			title: 'Toolbars can contain title and buttons',
			items: [{
				text: 'ping',
				align: 'right',
				action: 'pingHomeBadge'
			},{
				text: 'clear',
			}]
		}]
	}
});