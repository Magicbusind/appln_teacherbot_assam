# Copyright (c) 2023, Magic Bus and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document
from frappe.utils import now


class MBTC_PreAssessmentTool(Document):
	def before_insert(self):
		self.docstatus = 1 
		self.end = None

	def on_submit(self):
		self.end = now()
