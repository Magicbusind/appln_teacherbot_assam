# Copyright (c) 2023, Magic Bus and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
from frappe.utils import now
import datetime


class MBTC_SessionTrackingTool(Document):
	def before_insert(self):
		if self.session_planned_in_month == 0:
			frappe.throw(f"""    No. of session planned in the month Cannot be zero         """)

		no_of_session_planned_in_the_month = frappe.db.get_value('TeacherBot Haryana Settings','TeacherBot Haryana Settings',['session_planned_in_month'])

		if no_of_session_planned_in_the_month and (int(no_of_session_planned_in_the_month) <= int(self.session_planned_in_month)):
			frappe.throw(f"Please note that there are only {no_of_session_planned_in_the_month} sessions planned for {self.school_name_and_code} in the current month.")
		self.docstatus = 1 
		self.end = None

	def validate(self):
		no_of_session_planned_in_the_month = frappe.db.get_value('TeacherBot Haryana Settings','TeacherBot Haryana Settings',['session_planned_in_month'])

		if int(no_of_session_planned_in_the_month) <= int(self.session_planned_in_month):
			frappe.throw(f"Please note that there are only {no_of_session_planned_in_the_month} sessions planned for {self.school_name_and_code} in the current month.")

		if self.session_planned_in_month == 0:
			frappe.throw(f"""    No. of session planned in the month Cannot be zero         """)

	def on_submit(self):
		self.end = now()