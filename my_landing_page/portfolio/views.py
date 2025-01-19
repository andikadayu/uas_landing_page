from django.shortcuts import render
from rest_framework import viewsets
from .models import Contact
from .serializer import ContactSerializers

# Create your views here.
def home(request):
    return render(request, 'index.html')


#ViewSet
class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializers
