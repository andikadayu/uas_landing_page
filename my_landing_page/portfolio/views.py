from django.shortcuts import render
from rest_framework import viewsets
from .models import Contact, Portfolio
from .serializer import ContactSerializers

# Create your views here.
def home(request):
    portofolio = Portfolio.objects.all()
    return render(request, 'index.html',{'portofolio': portofolio})


#ViewSet
class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializers
