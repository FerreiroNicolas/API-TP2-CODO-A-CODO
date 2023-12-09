from django.shortcuts import render

# Create your views here.

from django.shortcuts import render
from django.urls import reverse_lazy
from django.views import View

from django.views.generic.list import ListView
from django.views.generic.edit import DeleteView, UpdateView, CreateView
from django.views.generic.detail import DetailView


from .models import Store

# Create your views here.


class StoreBaseView(View):
    template_name = 'store.html'
    model = Store
    fields = '__all__'
    success_url = reverse_lazy('store:all')


class StoreListView(StoreBaseView,ListView):
    """
    ESTO ME PERMITE CREAR UNA VISTA CON LAS EMPRESAS
    """

class StoreDetailView(StoreBaseView,DetailView):
    template_name = "store_detail.html"

class StoreCreateView(StoreBaseView,CreateView):
    template_name = "store_create.html"
    extra_context = {
        "tipo": "Crear empresa"
    }


class StoreUpdateView(StoreBaseView,UpdateView):
    template_name = "store_create.html"
    extra_context = {
        "tipo": "Actualizar empresa"
    }

class StoreDeleteView(StoreBaseView,DeleteView):
    template_name = "store_delete.html"
    extra_context = {
        "tipo": "Borrar empresa"
    }
