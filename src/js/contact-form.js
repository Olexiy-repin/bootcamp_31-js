'use strict';
import localStorageApi from './localstorage';

const CONTACT_FORM_LOCAL_STORAGE_KEY = 'formData';
const contactFormEl = document.querySelector('.js-contact-form');

const fillContactFormFieldes = form => {
  const contactFormElements = form.elements;
  const contactFormDataFromLocalStorage = localStorageApi.load(CONTACT_FORM_LOCAL_STORAGE_KEY);

  if (!contactFormDataFromLocalStorage) {
    return;
  }

  const keys = Object.keys(contactFormDataFromLocalStorage);

  for (const key of keys) {
    contactFormElements[key].value = contactFormDataFromLocalStorage[key];
  }
};

const onContactFormElementChange = event => {
  const { target } = event;
  const contactFormElementName = target.name;
  const contactFormElementValue = target.value;
  const formDataFromLocalSorage = localStorageApi.load(CONTACT_FORM_LOCAL_STORAGE_KEY) || {};

  formDataFromLocalSorage[contactFormElementName] = contactFormElementValue;

  localStorageApi.save(CONTACT_FORM_LOCAL_STORAGE_KEY, formDataFromLocalSorage);
};

const onContactFromSubmit = event => {
  event.preventDefault();

  event.target.reset();
  localStorageApi.remove(CONTACT_FORM_LOCAL_STORAGE_KEY);
};

contactFormEl.addEventListener('change', onContactFormElementChange);
contactFormEl.addEventListener('submit', onContactFromSubmit);
fillContactFormFieldes(contactFormEl);
