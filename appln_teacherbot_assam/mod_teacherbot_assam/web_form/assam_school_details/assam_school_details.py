import frappe

def get_context(context):
	# do your magic here
	pass


@frappe.whitelist(allow_guest=True)
def get_block(district):
    dd = frappe.db.sql(
        f"""select name from `tabMBTC_AS_Master_Block` where district = '{district}'""", as_dict=1)
    return '\n' + '\n'.join(data_item['name'] for data_item in dd)

