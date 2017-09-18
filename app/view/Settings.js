Ext.define('HRD.view.Settings', {
	extend: 'Ext.form.FormPanel',
	xtype: 'settingscard',
	requires: [
		'Ext.form.FieldSet',
		'Ext.field.Password'
	],
	config: {
		title: 'Settings',
		iconCls: 'settings',
		items: [{
			xtype: 'toolbar',
			docked: 'top',
			title: 'Settings'
		},{
			xtype: 'fieldset',
			title: 'Details',
			items: [{
				name: 'username',
				label: 'Username',
				xtype: 'filefield'
			},{
				name: 'password',
				label: 'Password',
				xtype: 'passwordfield'
			}]
		},{
			xtype: 'fieldset',
			items: [{
				name: 'submit',
				text: 'Submit',
				ui: 'confirm',
				xtype: 'button'
			}]
		}]
	}
});