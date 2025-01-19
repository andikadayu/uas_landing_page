from django.contrib import admin
from .models import Category,Contact,Portfolio

# Register your models here.
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name']
    search_fields = ['name']

class PortfolioAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'category','image')
    search_fields = ('title', 'description')
    list_filter = ['category']

class ContactAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone', 'message')
    search_fields = ('name', 'email', 'phone')
    list_filter = ('name', 'email')

admin.site.register(Category,CategoryAdmin)
admin.site.register(Portfolio,PortfolioAdmin)
admin.site.register(Contact,ContactAdmin)