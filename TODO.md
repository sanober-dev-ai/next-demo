- [ ] Inspect current AdmissionForm component implementation details.
- [x] Found root cause: AdmissionFormCard creates its own useAdmissionForm() hook instance (state mismatch with CtaBanner notification state).
- [x] Remove internal useAdmissionForm() from src/app/components/customElement/AdmissionForm.jsx and rely on props passed from CtaBanner.

- [ ] Verify notification appears after submitting from CTABanner.
