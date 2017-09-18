Ext.define('HRD.view.Contact', {
	extend: 'Ext.form.Panel',
	xtype: 'contactform',
	config: {
		title: 'Contact',
		iconCls: 'user',
		items: [{
			xtype: 'textfield',
			name: 'name',
			label: 'Name'
		},{
			xtype: 'emailfield',
			name: 'email',
			label: 'Email'
		},{
			xtype: 'textareafield',
			name: 'message',
			label: 'Message'
		}]
	}
});