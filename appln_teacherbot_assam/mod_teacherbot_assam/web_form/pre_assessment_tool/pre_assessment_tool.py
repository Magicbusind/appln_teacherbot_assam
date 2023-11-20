import frappe

def get_context(context):
	# do your magic here
	pass

@frappe.whitelist(allow_guest=True)
def get_block(district_name):
    dd = frappe.db.sql(
        f"""select name from `tabMBTC_AS_Master_Block` where district = '{district_name}'""", as_dict=1)
    return '\n' + '\n'.join(data_item['name'] for data_item in dd)

@frappe.whitelist(allow_guest=True)
def get_school(district_name, block_name):
    dd = frappe.db.sql(
        f"""select name from `tabMBTC_AS_Master_School` where district = '{district_name}' and block = '{block_name}'""", as_dict=1)
    return '\n' + '\n'.join(data_item['name'] for data_item in dd)


